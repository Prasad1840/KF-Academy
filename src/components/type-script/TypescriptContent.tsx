import { motion } from "framer-motion";
import { useTypescriptStore } from "./useTypescriptStore";
import { useEffect } from "react";


const TypescriptContent= () => {
    const selected = useTypescriptStore((state) => state.selected);
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
            {selected.title === "Best Practices : TypeScript Declaration Files" && (
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
                        Declaration files (<code className="font-mono bg-gray-100 px-1">.d.ts</code>) help TypeScript understand the shape of code written in plain JavaScript. The following practices ensure clean, reliable, and reusable type definitions:
                    </p>

                    <ol className="w-[80%] space-y-10 pl-6">
                    <li>
                        <h3 id="export-only-type-declarations-in-dts-files" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Export Only Type Declarations in .d.ts Files
                        </h3>
                        <p>
                        Avoid including logic or implementation in declaration files. They should strictly contain types, interfaces, enums, or module declarations.
                        </p>
                    </li>

                    <li>
                        <h3 id="use-module-declarations-instead-of-global-ones" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Use Module Declarations Instead of Global Ones
                        </h3>
                        <p>
                        Limit the use of <code className="font-mono bg-gray-100 px-1">declare global</code> to scenarios that truly require it. Prefer writing modular declaration files that describe modules or libraries explicitly.
                        </p>
                    </li>

                    <li>
                        <h3 id="mark-immutable-properties-as-readonly" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Mark Immutable Properties as readonly
                        </h3>
                        <p>
                        Apply the <code className="font-mono bg-gray-100 px-1">readonly</code> modifier to properties that should not change after initialization. This improves type safety and makes your intentions clear.
                        </p>
                    </li>

                    <li>
                        <h3 id="maintain-proper-parameter-order" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Maintain Proper Parameter Order
                        </h3>
                        <p>
                        Optional parameters should always appear after required ones. This aligns with how functions are typically used and prevents confusion.
                        </p>
                    </li>

                    <li>
                        <h3 id="prefer-interfaces-for-object-shapes" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Prefer Interfaces for Object Shapes
                        </h3>
                        <p>
                        Interfaces provide better support for extension and merging compared to type aliases, especially in public APIs.
                        </p>
                    </li>

                    <li>
                        <h3 id="explicitly-specify-return-types" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Explicitly Specify Return Types
                        </h3>
                        <p>
                        Always declare return types in exported functions. This improves readability and ensures that changes don’t accidentally break expected outputs.
                        </p>
                    </li>

                    <li>
                        <h3 id="use-unknown-instead-of-any" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Use unknown Instead of any
                        </h3>
                        <p>
                        The <code className="font-mono bg-gray-100 px-1">unknown</code> type forces developers to perform checks before using the value, improving code safety compared to <code className="font-mono bg-gray-100 px-1">any</code>, which disables type checking.
                        </p>
                    </li>

                    <li>
                        <h3 id="avoid-using-null-when-undefined-suffices" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Avoid Using null When undefined Suffices
                        </h3>
                        <p>
                        Favor <code className="font-mono bg-gray-100 px-1">undefined</code> to align with JavaScript’s standard behavior unless interfacing with APIs that explicitly return <code className="font-mono bg-gray-100 px-1">null</code>.
                        </p>
                    </li>

                    <li>
                        <h3 id="use-declare-module-for-external-packages" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Use declare module for External Packages
                        </h3>
                        <p>
                        When typing third-party libraries, wrap declarations inside <code className="font-mono bg-gray-100 px-1">declare module</code> to avoid polluting the global scope and enable modular consumption.
                        </p>
                    </li>

                    <li>
                        <h3 id="test-declaration-files" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Test Declaration Files
                        </h3>
                        <p>
                            Use tools like 
                            <a 
                                href="https://github.com/microsoft/dtslint" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-mono bg-gray-100 px-1 text-blue-800 hover:underline"
                            >
                                DefinitelyTyped’s dtslint
                            </a> 
                            to validate your 
                            <code className="font-mono bg-gray-100 px-1">.d.ts</code> 
                            files and ensure they conform to community standards.
                        </p>
                    </li>
                    </ol>

                    <p className="font-bold text-xl pl-6">
                    Read More:&nbsp;
                    <a 
                        href="https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:underline font-medium"
                    >
                        TypeScript Declaration Files Do’s and Don’ts – Handbook
                    </a>
                    </p>
                    </motion.div>
                </div>
            )}

            {/* Training Material – Angular Learn Tutorial */}
            {selected.title === "Training Material : TypeScript Handbook" && 
                <div>
                <motion.div
                    className="p-6 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >

                    {/* Main Heading */}
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">
                        Training Material : TypeScript Handbook
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
                            The official TypeScript Handbook is a comprehensive learning resource that introduces key concepts progressively and prepares developers to adopt TypeScript in real-world applications.
                        </p>

                        <h2 className="text-3xl text-[rgb(6,51,42)] font-bold mb-2 mt-6">
                            Modules Covered
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
                                ["Introduction", "What is TypeScript, benefits, setup, compilation process"],
                                ["Basic Types", "Numbers, strings, booleans, arrays, tuples, and object literals"],
                                ["Functions", "Function types, optional and default parameters, overloads"],
                                ["Interfaces and Type Aliases", "Defining and extending structured types, contracts, and property modifiers"],
                                ["Classes and Inheritance", "Public/private access, inheritance, constructors, class members"],
                                ["Enums and Union Types", "Enumerations, discriminated unions, type guards"],
                                ["Generics", "Reusable components and functions using type parameters"],
                                ["Modules", "Modularization, imports, exports, namespaces"],
                                ["Type Inference", "How TypeScript infers types and narrows them based on logic"],
                                ["Advanced Types", "Mapped types, conditional types, utility types like Partial, Readonly"],
                                ["Declaration Files", "Creating .d.ts files to type third-party JS libraries"],
                            ].map(([module, topics], index) => (
                                <tr
                                key={index}
                                className="even:bg-white odd:bg-gray-50 border-b border-gray-200"
                                >
                                <td className="p-2 border border-gray-300 font-medium">{module}</td>
                                <td className="p-2 border border-gray-300">{topics}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <p className="text-black font-bold leading-relaxed space-y-6 text-2xl pl-6 mt-6">
                            Complete Training:&nbsp;
                            <a
                            href="https://www.typescriptlang.org/docs/handbook/intro.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 hover:underline font-medium"
                            >
                            TypeScript Handbook – Introduction
                            </a>
                        </p>
                    </div>
                    
                </motion.div>
                </div>
            }
        </div>
    );
}

export default TypescriptContent;