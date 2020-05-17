import React from 'react';
import { Link } from 'gatsby';


import { EMPTY, from, fromEvent, generate, interval, merge, noop } from 'rxjs';
import { map, pluck, scan, sequenceEqual, switchMap, take, tap } from 'rxjs/operators';

import './memory.scss';

export const MemoryGame = () => {

	const random = () => Math.floor(Math.random() * Math.floor(8));
	const setInfo = (text) => document.getElementById('info').innerHTML = text;

	const displayLevelChange = () => document
		.querySelectorAll('.child')
		.forEach((c) => c.style.background = 'gray');

	const checkIfGameOver$ = (randomSequence) => (userSequence) =>
		from(userSequence)
			.pipe(
				sequenceEqual(from(randomSequence)),
				tap(match =>
					!match && userSequence.length === randomSequence.length
						? setInfo('GAME OVER!')
						: noop
				)
			);

	const takePlayerInput$ = (randomSequence) => _ => fromEvent(document, 'click')
		.pipe(
			take(randomSequence.length),
			scan((acc, curr) => [...acc, parseInt(curr.target['id'])], []),
			switchMap(checkIfGameOver$(randomSequence)),
			switchMap(result => result
				? (displayLevelChange(), memoryGame$(randomSequence.length + 1))
				: EMPTY)
		);

	const showSequenceToMemorize$ = (memorySize) => (randomSequence) =>
		interval(1000)
			.pipe(
				tap(i => setInfo(i === memorySize - 1 ? `YOUR TURN` : `${memorySize - i} boxes`)),
				take(randomSequence.length),
				map(index => randomSequence[index]),
				tap(value => document.getElementById(`${value}`).click()),
				switchMap(takePlayerInput$(randomSequence))
			);

	const memoryGame$ = memorySize =>
		generate(1, x => x <= memorySize, x => x + 1)
			.pipe(
				scan((acc, _) => [...acc, random() + 1], []),
				switchMap(showSequenceToMemorize$(memorySize))
			);

	const elementClick$ = (event, color) =>{
		if (typeof window !== `undefined`) {
			return fromEvent(document.getElementsByClassName('child'), event)
				.pipe(
					pluck('srcElement'),
					tap((e) => e.style.background = color)
				);
		}
	}

	const clicks$ = merge(
		elementClick$('click', 'lightgray'),
		elementClick$('transitionend', '#222')
	);

	const game$ = merge(clicks$, memoryGame$(2));

	const startGame = () => {
		setTimeout(() => {
			game$.subscribe();
		}, 500);
	};

	return (
		<div className="game__container">
      <Link className="home__button" to="/">All Articles</Link>
			<h1 className="mobile">Memory Game</h1>
			<div className="game__header cover mobile">
				<h2>Game Instruction</h2>
				<p>Memory test game, will help to revisit our childhood days and kill boredom.</p>
				<p>
					Click the play button, and keep your eyes on blinking squares.
					Your turn will be after the computer's turn, you have to click the same square which are clicked by the computer.
				</p>
				<p>But keep calm! There are also some tricky obstacles and traps that are waiting for you!</p>
				<p>So it's on you! How far will you get on this exciting adventure?</p>
			</div>
			<div className={`game__description mobile`}>
				<button onClick={startGame}>Play / Reset</button>
				<div id="info"></div>
				<div id="grid" className={`game__body grid parent perspective`}>
					<div className="column">
						<div className="child" id="1"></div>
						<div className="child" id="2"></div>
						<div className="child" id="3"></div>
					</div>
					<div className="column">
						<div className="child" id="4"></div>
						<div className="child" id="5"></div>
						<div className="child" id="6"></div>
					</div>
					<div className="column">
						<div className="child" id="7"></div>
						<div className="child" id="8"></div>
						<div className="child" id="9"></div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default MemoryGame;
