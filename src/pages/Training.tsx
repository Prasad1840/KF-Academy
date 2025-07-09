import React, { useState } from "react";
import FullscreenImage from "../components/FullscreenImage";
import Sidebar from "../components/Sidebar";
import { AnimatePresence } from "framer-motion";


const Training: React.FC = ()=> {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div>
    {!isExpanded && <div className="relative flex h-full">
      <Sidebar onImageClick={() => setIsExpanded(true)} />
      <main className="ml-[20%] flex-1 bg-gray-50 p-8 ">
        <h1 className="text-3xl font-georgia font-bold mb-4">Training goals and expectations</h1>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue vel lacus porta dignissim. Nullam in fermentum justo. Integer tempor, arcu sed ultricies ultrices, lectus diam sodales ex, nec imperdiet nisl metus in neque.</p>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue vel lacus porta dignissim. Nullam in fermentum justo. Integer tempor, arcu sed ultricies ultrices, lectus diam sodales ex, nec imperdiet nisl metus in neque.</p>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue vel lacus porta dignissim. Nullam in fermentum justo. Integer tempor, arcu sed ultricies ultrices, lectus diam sodales ex, nec imperdiet nisl metus in neque.</p>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue vel lacus porta dignissim. Nullam in fermentum justo. Integer tempor, arcu sed ultricies ultrices, lectus diam sodales ex, nec imperdiet nisl metus in neque.</p>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue vel lacus porta dignissim. Nullam in fermentum justo. Integer tempor, arcu sed ultricies ultrices, lectus diam sodales ex, nec imperdiet nisl metus in neque.</p>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue vel lacus porta dignissim. Nullam in fermentum justo. Integer tempor, arcu sed ultricies ultrices, lectus diam sodales ex, nec imperdiet nisl metus in neque.</p>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue vel lacus porta dignissim. Nullam in fermentum justo. Integer tempor, arcu sed ultricies ultrices, lectus diam sodales ex, nec imperdiet nisl metus in neque.</p>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue vel lacus porta dignissim. Nullam in fermentum justo. Integer tempor, arcu sed ultricies ultrices, lectus diam sodales ex, nec imperdiet nisl metus in neque.</p>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue vel lacus porta dignissim. Nullam in fermentum justo. Integer tempor, arcu sed ultricies ultrices, lectus diam sodales ex, nec imperdiet nisl metus in neque.</p>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</p>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        
      </main>
    </div>}
      <AnimatePresence>
        {isExpanded && <FullscreenImage onClose={() => setIsExpanded(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Training;