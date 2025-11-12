export const UXCompetencies = () => {
  const competencies = [
    {
      category: "User Research",
      skills: [
        "User Interviews",
        "Surveys & Questionnaires",
        "Affinity Mapping",
        "Persona Development",
        "Empathy Mapping",
        "User Testing",
        "Ethnography"
      ]
    },
    {
      category: "Interaction & Visual Design",
      skills: [
        "Wireframing",
        "Prototyping",
        "UI Design",
        "Information Architecture",
        "Design Systems",
        "Task Flows / User Flows",
        "Accessibility"
      ]
    },
    {
      category: "UX Strategy & Thinking",
      skills: [
        "Design Thinking",
        "User-Centered Design",
        "Problem Definition",
        "Journey Mapping",
        "Service Blueprints"
      ]
    },
    {
      category: "Collaboration & Development",
      skills: [
        "Agile & Scrum Methodologies",
        "Developer Handoff",
        "Basic HTML/CSS, JavaScript & Bootstrap"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-left mb-16 text-foreground">
          UX Competencies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {competencies.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-muted-foreground flex items-start transition-all duration-200 hover:scale-105 hover:text-foreground hover:translate-x-2 cursor-pointer"
                  >
                    <span className="mr-2 text-primary">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
