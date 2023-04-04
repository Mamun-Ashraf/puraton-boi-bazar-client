import React from 'react';

const Blog = () => {
    return (
        <div className='bg-green-300 p-5'>
            <p><span className='text-xl font-bold'>Q-1:</span>
                What are the different ways to manage a state in a React application?
            </p>
            <p><span className='text-xl font-bold'>Ans:</span>
                <li className='ml-5'>useState.</li>
                <li className='ml-5'>useReducer.</li>
                <li className='ml-5'>useMemo & useCallback.</li>
                <li className='ml-5'>useEffect.</li>
                <li className='ml-5'>useRef.</li>
                <li className='ml-5'>Context and Custom Hooks</li>
                <li className='ml-5'>React Query & React Location.</li>
                <li className='ml-5'>Zustand.</li>
            </p>
            <p><span className='text-xl font-bold'>Q-2:</span>
                How does prototypical inheritence work?
            </p>
            <p><span className='text-xl font-bold'>Ans:</span>
                Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.
            </p>
            <p><span className='text-xl font-bold'>Q-3:</span>
                What is a unit test? Why should we write unit tests?
            </p>
            <p><span className='text-xl font-bold'>Ans:</span>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
            </p>
            <p><span className='text-xl font-bold'>Q-4:</span>
                React vs Angular vs Vue?
            </p>
            <p><span className='text-xl font-bold'>Ans:</span>
                A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers. This guide focuses on helping you decide which framework to pick before starting your next project.
            </p>
        </div>
    );
};

export default Blog;