import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {counterActions} from '../store/counter';
import {Suspense, useEffect} from 'react';
import {useGetRecoilValueInfo_UNSTABLE, useRecoilState, useRecoilValue, useResetRecoilState} from "recoil";
import {counterState, showCounterState, mulByValQuery, personState} from '../recoilState/counter';


const Counter = () => {
    const [counter2, setCounter2] = useRecoilState(counterState);
    const [showCounter2, setShowCounter2] = useRecoilState(showCounterState);
    const [person, setPerson] = useRecoilState(personState);

    useEffect(() => {
        setPerson({name: 'Udi2', last: 'Mafw'});
    }, [setPerson])


    const mul12 = useRecoilValue(mulByValQuery(12));

    const dispatch = useDispatch()
    const showCounter = useSelector((state) => state.counter.showCounter);
    const counter = useSelector((state) => state.counter.counter);


    const toggleCounterHandler = () => {
        setShowCounter2(!showCounter2);
        dispatch(counterActions.toggleCounter());
    };
    const incrementHandler = () => {
        setCounter2(counter2 + 1);
        dispatch(counterActions.increment());
    };
    const decrementHandler = () => {
        setCounter2(counter2 - 1);
        dispatch(counterActions.decrement())
    };

    const increaseBy5Handler = () => {
        setCounter2(counter2 + 5)
        dispatch(counterActions.increase(5));
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div>{counter2}, {JSON.stringify(showCounter2)}, {mul12}</div>
                <div>{person.name}</div>
                {showCounter && <div className={classes.value}>{counter}</div>}
                <div className={classes.actions}>
                    <button onClick={incrementHandler}>Increment</button>
                    <button onClick={decrementHandler}>Decrement</button>
                    <button onClick={increaseBy5Handler}>Increase by 5</button>
                </div>
                <button onClick={toggleCounterHandler}>Toggle Counter</button>
            </main>
        </Suspense>
    );
};

export default Counter;
