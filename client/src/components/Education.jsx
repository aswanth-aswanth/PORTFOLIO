import { motion } from "framer-motion";
import { educationItems } from "../data/data";

function Education() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="education"
    >
      <h2 className="education-title">Education Journey</h2>

      <div className="timeline">
        {educationItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="timeline-item"
          >
            <div className="timeline-content">
              <div className="logo-box">
                <img src={`/assets/education/${item.img}`} alt={item.school} />
              </div>
              <div className="education-details">
                <span className="year">{item.year}</span>
                <h3 className="school">{item.school}</h3>
                <p className="degree">{item.degree}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Education;
