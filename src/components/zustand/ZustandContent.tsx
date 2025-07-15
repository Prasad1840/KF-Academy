import { motion } from "framer-motion";
import { useZustandStore } from "./useZustandStore";
import { useEffect } from "react";


const ZustandContent= () => {
    const selected = useZustandStore((state) => state.selected);
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
            {selected.title === "Best Practices – Working with Zustand" && (
                <div>
                    <motion.div
                    className="p-6 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">Best Practices : TypeScript Declaration Files</h1>
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
                    The blog by Dominik Dorfmeister (“tkdodo”) offers an expert guide to using Zustand effectively in production-ready applications. Here’s a deep dive into the practices:
                    </p>

                    <ol className="w-[80%] space-y-10 pl-6">
                    <li>
                        <h3 id="avoid-overusing-zustand" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Avoid Overusing Zustand
                        </h3>
                        <p>
                        Zustand is ideal for shared state or logic used across multiple components. Avoid using it for every piece of local UI state. React's 
                        <code className="font-mono bg-gray-100 px-1">useState</code> and 
                        <code className="font-mono bg-gray-100 px-1">useReducer</code> should still be your first choice inside components when the state doesn't need to be global.
                        </p>
                    </li>

                    <li>
                        <h3 id="separate-ui-state-from-business-logic" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Separate UI State from Business Logic
                        </h3>
                        <p>
                        Keep Zustand stores focused on business logic, while UI-specific toggles (like open/close modals) can live closer to the component tree. This separation keeps the store maintainable.
                        </p>
                    </li>

                    <li>
                        <h3 id="centralize-state-logic" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Keep State in One Place, Not Spread Across Components
                        </h3>
                        <p>
                        Zustand’s core strength is centralizing logic. It encourages putting state management outside components, making code easier to test and reuse.
                        </p>
                    </li>

                    <li>
                        <h3 id="use-selectors-and-equality-functions" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Use Selectors and Equality Functions
                        </h3>
                        <p>
                        To prevent unnecessary re-renders:
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Use selectors to access only required parts of the store.</li>
                            <li>Use shallow comparison from 
                            <code className="font-mono bg-gray-100 px-1">zustand/shallow</code> for optimizing renders.</li>
                        </ul>
                        <pre className="bg-gray-900 w-2xl text-green-200 font-mono p-4 rounded text-sm overflow-auto mt-3">
                    <code>{`const value = useStore((state) => state.value, shallow);`}</code>
                    </pre>
                        </p>
                    </li>

                    <li>
                        <h3 id="create-store-slices" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Create Store Slices (Modular Design)
                        </h3>
                        <p>
                        Break your store into slices (e.g., 
                        <code className="font-mono bg-gray-100 px-1">authSlice</code>, 
                        <code className="font-mono bg-gray-100 px-1">productSlice</code>, 
                        <code className="font-mono bg-gray-100 px-1">uiSlice</code>) and merge them in the root store. This improves modularity and code reuse, especially in larger applications.
                        </p>
                    </li>

                    <li>
                        <h3 id="handle-async-in-store" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Handle Async Logic Within the Store
                        </h3>
                        <p>
                        It’s encouraged to handle asynchronous operations (like API calls) within the store:
                        </p>
                        <pre className="bg-gray-900 w-2xl text-green-200 font-mono p-4 rounded text-sm overflow-auto mt-3">
                    <code>{`const fetchUser = async () => {
                    const res = await fetch('/api/user');
                    set({ user: await res.json() });
                    };`}</code>
                    </pre>
                        <p>This centralizes data logic and keeps components declarative.</p>
                    </li>

                    <li>
                        <h3 id="avoid-overabstracting" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Don’t Spread Zustand Across Multiple Files Too Early
                        </h3>
                        <p>
                        Unless the project is large, avoid over-abstracting Zustand logic into too many files. Start small, modularize when needed.
                        </p>
                    </li>

                    <li>
                        <h3 id="test-store-logic" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Write Tests for Store Logic
                        </h3>
                        <p>
                        Since Zustand stores are pure functions, they are very easy to test. Mock 
                        <code className="font-mono bg-gray-100 px-1">set</code>, call store actions, and validate state transitions.
                        </p>
                    </li>

                    <li>
                        <h3 id="use-devtools-middleware-sparingly" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Use DevTools and Middleware Sparingly
                        </h3>
                        <p>
                        DevTools middleware is useful but should be opt-in and disabled in production. You can also add custom middleware for logging or hydration.
                        </p>
                    </li>
                    </ol>

                    <p className="font-bold text-xl pl-6">
                    Read More:&nbsp;
                    <a 
                        href="https://tkdodo.eu/blog/working-with-zustand"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:underline font-medium"
                    >
                        Best Practices – Working with Zustand
                    </a>
                    </p>


                    </motion.div>
                </div>
            )}

            {/* Training Material */}
            {selected.title === "Training Material – Zustand Documentation" && 
                <div>
                <motion.div
                    className="p-6 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >

                    {/* Main Heading */}
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">
                        Training Material – Zustand Documentation
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
                        The official Zustand documentation provides clear and well-structured modules to help you adopt Zustand efficiently. Below is a detailed breakdown:
                        </p>

                        <div className="space-y-10 pl-6 mt-6">
                        <div>
                            <h3 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">1. Getting Started</h3>
                            <ul className="list-disc list-inside space-y-2">
                            <li>Install Zustand using <code className="font-mono bg-gray-100 px-1">npm i zustand</code></li>
                            <li>Create a store using the <code className="font-mono bg-gray-100 px-1">create</code> function</li>
                            <li>Access state using <code className="font-mono bg-gray-100 px-1">const value = useStore((state) =&gt; state.value)</code></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">2. Store API Overview</h3>
                            <ul className="list-disc list-inside space-y-2">
                            <li><code className="font-mono bg-gray-100 px-1">create</code> – Initializes a new Zustand store</li>
                            <li><code className="font-mono bg-gray-100 px-1">getState()</code> – Reads the current state outside React</li>
                            <li><code className="font-mono bg-gray-100 px-1">setState()</code> – Updates the store manually</li>
                            <li><code className="font-mono bg-gray-100 px-1">subscribe()</code> – Adds a callback for state changes</li>
                            <li><code className="font-mono bg-gray-100 px-1">destroy()</code> – Removes listeners and cleans up</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">3. Selectors and Optimization</h3>
                            <ul className="list-disc list-inside space-y-2">
                            <li>Zustand supports fine-grained selection to avoid unnecessary component re-renders</li>
                            <li>Use equality functions like <code className="font-mono bg-gray-100 px-1">shallow</code> for better performance</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">4. Middleware</h3>
                            <ul className="list-disc list-inside space-y-2">
                            <li><strong>DevTools:</strong> Connect your store to Redux DevTools</li>
                            <li><strong>Persistence:</strong> Store state in localStorage or sessionStorage</li>
                            <li><strong>Logging:</strong> Add custom logs for state changes</li>
                            <li><strong>Immutability:</strong> Integrate with <code className="font-mono bg-gray-100 px-1">immer</code> for immutable updates</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">5. TypeScript Support</h3>
                            <ul className="list-disc list-inside space-y-2">
                            <li>Define state and action types with strong typing</li>
                            <li>Type safety enhances refactoring and auto-completion</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">6. React Integration</h3>
                            <ul className="list-disc list-inside space-y-2">
                            <li>Supports server components and concurrent features</li>
                            <li>No need for Context providers</li>
                            <li>Integrates using the <code className="font-mono bg-gray-100 px-1">useStore</code> hook</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">7. Advanced Use Cases</h3>
                            <ul className="list-disc list-inside space-y-2">
                            <li>Split stores into modular slices (e.g., authSlice, uiSlice)</li>
                            <li>Dynamically create stores for SSR or isolated scopes</li>
                            <li>Hydrate state from persistent storage on boot</li>
                            </ul>
                        </div>
                        </div>

                        <p className="text-black font-bold leading-relaxed space-y-6 text-2xl pl-6 mt-6">
                        Complete Training:&nbsp;
                        <a
                            href="https://zustand.docs.pmnd.rs/getting-started/introduction"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 hover:underline font-medium"
                        >
                            Zustand Documentation – Introduction
                        </a>
                        </p>

                    </div>
                    
                </motion.div>
                </div>
            }
        </div>
    );
}

export default ZustandContent;