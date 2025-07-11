import { motion } from "framer-motion";
import { useReactStore } from "./useReactStore";
import { useEffect } from "react";


const ReactContent= () => {
    const selected = useReactStore((state) => state.selected);
    // const setSelected = useReactStore((state) => state.setSelected);

    useEffect(() => {
        if (selected.child === "") {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
        else{
            const section = document.getElementById(selected.child.replace(/\s+/g, '-').replace(/[:]/g, '').toLowerCase());
            if (section){
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [selected.child]);
    return (
        <div>
            {selected.title === "Best Practices : Thinking in React" && (
                <div>
                    <motion.div
                    className="p-6 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">Best Practices: Thinking in React</h1>
                    <div className="mt-3 h-1 w-36 mb-5 bg-black rounded" />
                    </motion.div>

                    <div className="mt-3 h-0.5 w-full mb-5 bg-gray-500 rounded" />

                    <motion.div
                    key={selected.child}
                    className="text-black leading-relaxed space-y-6 text-base"
                    initial={{ opacity: 0,x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                    <p>
                        This section teaches how to break down UI requirements and build clean,
                        maintainable components:
                    </p>

                    <ol className="pl-6 space-y-10">
                        <li >
                        <h3 id="start-with-the-design" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                            Start with the Design
                        </h3>
                        <p>
                            Begin by examining the UI mockup or wireframe. Look for repeating visual
                            patterns—cards, buttons, sections. Group these logically as components.
                        </p>
                        <p className="font-medium mt-2">
                            Goal: Understand what can be reused and nested.
                        </p>
                        </li>

                        <li>
                        <h3 id="build-a-component-hierarchy" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                            Build a Component Hierarchy
                        </h3>
                        <p>
                            Organize repeating blocks into a tree of components. Nest smaller components
                            within larger ones:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>App</li>
                            <li>Header</li>
                            <li>SearchBar</li>
                            <li>ProductList</li>
                            <li>ProductItem</li>
                        </ul>
                        <p className="font-medium mt-2">
                            Goal: Visualize component nesting and data flow.
                        </p>
                        </li>

                        <li>
                        <h3 id="design-the-static-version-first" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                            Design the Static Version First
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Use hardcoded data</li>
                            <li>Skip interactivity initially</li>
                            <li>Structure for layout only</li>
                        </ul>
                        <p className="font-medium mt-2">
                            Goal: Build visual structure before logic.
                        </p>
                        </li>

                        <li>
                        <h3 id="find-the-minimal-state" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                            Find the Minimal Complete Representation of UI State
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Only store essential state</li>
                            <li>Derived data should be computed</li>
                        </ul>
                        <p className="font-medium mt-2">
                            Goal: Avoid redundancy and state pollution.
                        </p>
                        </li>

                        <li>
                        <h3 id="identify-where-state-should-live" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                            Identify Where State Should Live
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Shared state → common parent</li>
                            <li>Component-specific → local</li>
                            <li>Lift state up when needed</li>
                        </ul>
                        <p className="font-medium mt-2">
                            Goal: Ensure consistent single source of truth.
                        </p>
                        </li>

                        <li>
                        <h3 id="add-inverse-data-flow" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                            Add Inverse Data Flow
                        </h3>
                        <p>
                            Use callback functions to send data from child to parent.
                        </p>
                        <pre className="bg-gray-900 w-2xl text-green-200 font-mono p-4 rounded text-sm overflow-auto mt-3">
                            <code>
                                {`// Parent component

function Parent() {
    const [value, setValue] = useState("");
    return <Child onInputChange={setValue} />;
}
`}
                            </code>
                        </pre>
                        <p className="font-medium mt-2">
                            Goal: Let children update parent state.
                        </p>
                        </li>

                        <li>
                        <h3 id="escape-hatches" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                            Escape Hatches
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Refs:</strong> Access DOM nodes</li>
                            <li><strong>Effects:</strong> Handle side effects (timers, APIs)</li>
                            <li><strong>Custom Hooks:</strong> Encapsulate reusable logic</li>
                        </ul>
                        <p className="font-medium mt-2">
                            Goal: Handle advanced cases cleanly.
                        </p>
                        </li>
                    </ol>
                    <p className=" text-black font-bold leading-relaxed space-y-6 text-xl pl-6">
                        Read full:&nbsp;
                        <a 
                            href="https://react.dev/learn/thinking-in-react" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-800 hover:underline font-medium"
                        >
                            Thinking in React
                        </a>
                    </p>

                    </motion.div>
                </div>
            )}

            {/* Training Material – React Learning Guide */}
            {selected.title === "Training Material – React Learning Guide" && 
                <div>
                <motion.div
                    className="p-6 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >

                    {/* Main Heading */}
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">
                        Training Material – React Learning Guide
                    </h1>

                    {/* Underline */}
                    <div className="mt-3 h-1 w-36 mb-5 bg-red-600 rounded"  />

                </motion.div>

                {/* Line */}
                <div className="mt-3 h-0.5 w-full mb-5 bg-gray-500 rounded" />


                <motion.div
                    className="p-6"
                    initial={{ opacity: 0, y: 30 }}     // starts lower and invisible
                    animate={{ opacity: 1, y: 0 }}      // fades in and moves up
                    transition={{ duration: 0.6, ease: "easeOut" }}  // smooth slide
                >
                    {/* Content */}
                    <div className="text-black leading-relaxed space-y-6 text-base">
                        <p>
                            This section will guide learners through the core React topics in a
                            structured and hands-on manner:
                        </p>

                        <h2 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                            Covered Modules
                        </h2>

                        <table className="table-auto w-full border border-gray-300 mt-4 text-sm">
                            <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2 border border-gray-300">Module</th>
                                <th className="p-2 border border-gray-300">Topics Included</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[
                                ["Quick Start", "Components, JSX, props, rendering data, handling events"],
                                ["Describing the UI", "Nesting components, organizing files, writing markup"],
                                ["Adding Interactivity", "Updating state, event handling, conditional rendering"],
                                ["Managing State", "Lifting state up, sharing state, reducers, context"],
                                ["Escape Hatches", "Using refs, effects, and building custom hooks"],
                                ["Reusing Logic", "Custom hooks and component composition"],
                                ["Lists and Keys", "Rendering arrays, mapping data, and key best practices"],
                                ["Forms", "Controlled components, form handling, and validation"],
                                ["React DevTools", "Debugging React apps and inspecting component trees"],
                                ["Accessibility", "Building accessible UIs with ARIA roles and semantics"],
                                ["Performance Optimization", "Memoization, lazy loading, and efficient rendering"],
                                ["Testing Components", "Unit testing, mocking, and UI behavior testing"],
                                ["React with TypeScript", "Type annotations, props, and event typing"],
                                ["Integrating with APIs and Libraries", "Using APIs, third-party libraries, and external tools"],
                                ["Deployment and Build Tools", "Setting up with Vite, Parcel, or Next.js"],
                                ["Tutorial (Tic Tac Toe)", "Hands-on mini-project for learners to practice skills"],
                            ].map(([module, topics], index) => (
                                <tr
                                key={index}
                                className="even:bg-white odd:bg-gray-50 border-b border-gray-200"
                                >
                                <td className="p-2 border border-gray-300 font-medium">
                                    {module}
                                </td>
                                <td className="p-2 border border-gray-300">{topics}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        
                        <p className=" text-black font-bold leading-relaxed space-y-6 text-2xl pl-6">
                        Full Guide:&nbsp;
                        <a 
                            href="https://react.dev/learn" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-800 hover:underline font-medium"
                        >
                            React Learning Guide
                        </a>
                    </p>

                    </div>
                    
                </motion.div>
                </div>
            }
        </div>
    );
}

export default ReactContent;