import { motion } from "framer-motion";
import { useAngularStore } from "./useAngularStore";
import { useEffect } from "react";


const AngularContent= () => {
    const selected = useAngularStore((state) => state.selected);
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
            {selected.title === "Best Practices : Angular Style Guide" && (
                <div>
                    <motion.div
                    className="p-6 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">Best Practices: Angular Style Guide</h1>
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
                        The Angular team offers a well-defined set of recommendations that ensure consistency, maintainability, and performance across Angular projects.
                    </p>

                    <ol className="w-[80%] space-y-10 pl-6">
                    <li>
                        <h3 id="use-a-feature-based-folder-structure" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Use a Feature-Based Folder Structure
                        </h3>
                        <p>
                        Group files by feature or domain rather than by file type (e.g., user, dashboard). This structure enhances modularity and helps scale the application more effectively as it grows.
                        </p>
                    </li>

                    <li>
                        <h3 id="follow-consistent-naming-conventions" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Follow Consistent Naming Conventions
                        </h3>
                        <p>
                        Adopt clear and descriptive names for files, such as <code className="font-mono bg-gray-100 px-1">home.component.ts</code>, <code className="font-mono bg-gray-100 px-1">auth.service.ts</code>, and <code className="font-mono bg-gray-100 px-1">app.module.ts</code>. This makes it easier for teams to navigate and identify responsibilities at a glance.
                        </p>
                    </li>

                    <li>
                        <h3 id="use-scams-single-component-angular-modules" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Use SCAMs (Single Component Angular Modules)
                        </h3>
                        <p>
                        Create a dedicated <code className="font-mono bg-gray-100 px-1">NgModule</code> for each component. This improves lazy loading, simplifies testing, and promotes better reusability across different parts of the application.
                        </p>
                    </li>

                    <li>
                        <h3 id="keep-components-simple-and-focused" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Keep Components Simple and Focused
                        </h3>
                        <p>
                        Components should only handle UI-related logic. Business logic, complex operations, and data management should reside in services. This leads to cleaner code and makes components easier to test.
                        </p>
                    </li>

                    <li>
                        <h3 id="leverage-dependency-injection" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Leverage Dependency Injection
                        </h3>
                        <p>
                        Use Angular’s dependency injection mechanism to inject services and other resources. This approach reduces tight coupling and makes components more reusable and testable.
                        </p>
                    </li>

                    <li>
                        <h3 id="avoid-putting-logic-in-templates" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Avoid Putting Logic in Templates
                        </h3>
                        <p>
                        Business logic or complex calculations should not be placed inside templates. Instead, handle them in the component class and expose clean variables or methods to the view.
                        </p>
                    </li>

                    <li>
                        <h3 id="prefer-observables-over-manual-subscriptions" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Prefer Observables Over Manual Subscriptions
                        </h3>
                        <p>
                        Use the <code className="font-mono bg-gray-100 px-1">async</code> pipe to manage observables in templates rather than subscribing manually in the component. This prevents memory leaks and simplifies the code.
                        </p>
                    </li>

                    <li>
                        <h3 id="use-trackby-with-ngfor" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Use trackBy with *ngFor
                        </h3>
                        <p>
                        When using <code className="font-mono bg-gray-100 px-1">*ngFor</code> to render lists, implement the <code className="font-mono bg-gray-100 px-1">trackBy</code> function to help Angular efficiently identify changed items, reducing unnecessary DOM re-renders.
                        </p>
                    </li>

                    <li>
                        <h3 id="use-interfaces-and-strong-typing" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Use Interfaces and Strong Typing
                        </h3>
                        <p>
                        Define interfaces for API responses, models, and component inputs. Strong typing improves code readability, error checking, and IDE support.
                        </p>
                    </li>

                    <li>
                        <h3 id="write-and-maintain-unit-tests" className="text-3xl text-[rgb(6,51,42)] font-bold mb-2">
                        Write and Maintain Unit Tests
                        </h3>
                        <p>
                        Make use of Angular’s testing utilities, including <code className="font-mono bg-gray-100 px-1">TestBed</code>, to write unit tests for components, directives, pipes, and services. Ensure tests are part of the CI/CD pipeline to maintain quality.
                        </p>
                    </li>
                    </ol>

                    <p className="font-bold text-xl pl-6">
                    Read More:&nbsp;
                    <a 
                        href="https://angular.dev/guide/styleguide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:underline font-medium"
                    >
                        Angular Style Guide
                    </a>
                    </p>

                    </motion.div>
                </div>
            )}

            {/* Training Material – Angular Learn Tutorial */}
            {selected.title === "Training Material : Angular Learn Tutorial" && 
                <div>
                <motion.div
                    className="p-6 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >

                    {/* Main Heading */}
                    <h1 className="text-5xl font-extrabold text-[rgb(6,51,42)] mb-4">
                        Training Material : Angular 
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
                            The official Angular tutorial provides a practical, hands-on learning path for new and intermediate developers. Through the tutorial, learners build a sample project and are introduced to all key Angular concepts.
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
                                ["Getting Started", "CLI installation, project scaffolding"],
                                ["Component Basics", "Templates, decorators, inputs/outputs"],
                                ["Data Binding", "Property binding, event binding, two-way binding"],
                                ["Directives", "Structural (*ngIf, *ngFor) and attribute directives"],
                                ["Services and DI", "Creating services, injecting dependencies"],
                                ["Routing and Navigation", "Defining routes, navigation, route parameters"],
                                ["Forms", "Template-driven and reactive forms, validation"],
                                ["HTTP Communication", "Making API calls using HttpClient, handling responses"],
                                ["Testing", "Writing and running unit tests using Jasmine and TestBed"],
                                ["Deployment", "Building and deploying an Angular application"],
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
                                href="https://angular.dev/tutorials/learn-angular"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-800 hover:underline font-medium"
                            >
                                Learn Angular
                            </a>
                        </p>


                    </div>
                    
                </motion.div>
                </div>
            }
        </div>
    );
}

export default AngularContent;