import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Virtual Reality Experience",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    title: "Team Collaboration",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "Smart Technology",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    title: "Innovation & Design",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    title: "Creative Workspace",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = ["All", "Technology", "Business", "Design"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="gallery"
      className="min-h-screen bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-blue-bright">
            // Latest Case Studies
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#202124] sm:text-4xl">
            Introduce Our Projects
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500">
            Software development outsourcing is just a tool to achieve
            business goals. But there is no way to get worthwhile results
            without cooperation and trust between a client company.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-7 flex flex-wrap items-center justify-center gap-7">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`border-b pb-1 text-sm transition-colors duration-300 ${
                activeCategory === category
                  ? "border-blue-bright text-blue-bright"
                  : "border-transparent text-gray-500 hover:text-blue-bright"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item, index) => (
            <motion.article
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group relative aspect-square overflow-hidden bg-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="mb-1 text-xs uppercase tracking-widest text-blue-bright">
                  {item.category}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}