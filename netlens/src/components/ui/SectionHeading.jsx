import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-4 max-w-2xl mb-14 ${alignClass}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-accent glow-dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{title}</h2>
      {description && <p className="text-muted text-base leading-relaxed">{description}</p>}
    </motion.div>
  );
}
