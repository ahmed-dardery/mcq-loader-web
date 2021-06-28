const dss = [
    {
        text: "What would be the principal contribution of DSS to information technology?",
        options: ["The inclusion of a model base and its management system",
            "The inclusion of an Expert System",
            "The inclusion of a relational database and its management system",
            "None of the choices"]
    },
    {
        text: "What would be the role of a model building language in a DSS context ?",
        options: ["Implement a model on computer",
            "Formulate or build a model",
            "Integrate a model into the model base",
            "None of the choices"]
    },
    {
        text: "______ is viewed as a leading general purpose DSS in the Arab region that concentrates on socioeconomic issues.",
        options: ["Information and Decision Support Center",
            "Development Planning Support System",
            "both",
            "neither"]
    },
    {
        text: "Cairo University senior management DSS covers ______ decision support systems and analytical tools",
        options: ["both",
            "data-centered",
            "model-centered",
            "neither"]
    },
    {
        text: "Cairo University Senior Management DSS can be used to compare its performance with other _____ universities in Egypt.",
        options: ["public",
            "private",
            "public and private",
            "neither"]
    },
    {
        text: "The _____ capability of modeling language describes variables, structure and mathematical specification of a model.",
        options: ["explanation",
            "interpertation",
            "goal-seeking",
            "simulation"]
    },
    {
        text: "The main contribution of DSS to computer management systems is",
        options: ["Modeling and model base management systems",
            "Knowledge Management",
            "Database manipulation Systems",
            "None of the choices"]
    },
    {
        text: "Special purpose DSS is classified as:",
        options: ["Tool vs. domain oriented DSS",
            "Model vs. data centered DSS",
            "Single vs. group DSS",
            "General vs. special DSS"]
    },
    {
        text: "AHP is viewed as a/an ___________ DSS",
        options: ["tool-oriented special purpose",
            "domain-oriented special purpose",
            "integrated general purpose",
            "model centered general purpose"]
    },
    {
        text: "Executive information system (EIS) is generally used to support ____________ decisions",
        options: ["high management",
            "middle management",
            "low management",
            "all of the options"]
    },
    {
        text: "Data warehouse is mainly used for",
        options: ["query and analysis",
            "transaction processing",
            "day-to-day operations",
            "all of the options"]
    },
    {
        text: "Models in a Decision Support cycle are used to ________",
        options: ["Test alternative solutions, policy options, and assess risk of decisions",
            "Organize and estimate information and statistics.",
            "Approve and validate decisions",
            "Identify system external data and parameters"]
    },
    {
        text: "What would be the role of data mining tools in a DSS?",
        options: ["Discover data patterns and relationships.",
            "Test alternative policy measures",
            "Formulate or build a mathematical Models.",
            "all of the options"]
    },
    {
        text: "Extraction, Transformation and Loading (ETL) software system contributes to _____",
        options: ["Develop a data warehouse.",
            "Support business intelligence tools.",
            "Construct a model base.",
            "Generate ad-hoc report."]
    },
    {
        text: "What would be the role of a structured modeling language in a DSS?",
        options: ["Represent graphically the decision-making problem domain.",
            "Incorporate models in a model base.",
            "Formulate or build a mathematical Model.",
            "all of the options"]
    },
    {
        text: "Declarative modeling languages concentrate only on",
        options: ["specification of the model and selection of its solvers",
            "solution strategy",
            "specification of the model and its solution strategy",
            "specification of the model"]
    },

    {
        text: "Which of these is not a property of statistical analysis?",
        options: ["Uses different types of data",
            "Start usually with a hypothesis",
            "Statistician interpret their own results or decision maker",
            "Statisticians have to develop their own model"]
    },
    {
        text: "Which of these is not a property of data mining?",
        options: ["Data mining can filter dirty data during analysis",
            "Doesn't require a hypothesis",
            "Algorithms can automatically develop the equations",
            "Results are not easy to interpret"]
    },
    {
        text: "The Data mining techniques provide _______ to decision makers",
        options: ["insights",
            "foresights",
            "hindsights",
            "none of the choices"]
    },
    {
        text: "A transaction processing database relies on a multi-dimensional data model",
        ans: false
    },
    {
        text: "A data warehousing is essential part of the data centered DSS",
        ans: true
    },
    {
        text: "The Data mining techniques provide “foresights” to decision makers",
        ans: false
    },
    {
        text: "“Hindsight and insight” phases are the main functions of a model-centered DSS",
        ans: false
    },
    {
        text: "GAMS is a language used to implement mathematical programming models",
        ans: true
    },
    {
        text: "GAMS is an “integrated” and not a “declarative” modeling language",
        ans: false
    },
    {
        text: "A DSS is an information technology relying on analytical data, computational models in addition to the insights of decision maker",
        ans: true
    },
    {
        text: "A Group DSS (GDSS) needs a Communication Management Software System",
        ans: true
    },
    {
        text: "DSS Generator as a modeling language support model experimentation and analysis of its results",
        ans: true
    },
    {
        text: "IDE of GAMS is used to link a specific solver or solution algorithm to GAMS software",
        ans: true
    },
    {
        text: "Special purpose Decision Support Systems (DSS) concentrate on relatively small size problems and they are less expensive than general purpose DSS",
        ans: true
    },
    {
        text: "Special Purpose DSS can be viewd as a domain driven or a tool driven system.",
        ans: true
    },
    {
        text: "Multi-dimensional database model, Data warehousing and OLAP are generally used to support Ad-Hoc Reports",
        ans: true
    },
    {
        text: "Insight Analysis is considered part of the data-centered DSS",
        ans: true
    },
    {
        text: "Multi-dimensional database model with cube structure is designed to reflect the management view in supporting decisions",
        ans: true
    },
    {
        text: "\"What If\" Analysis in business intelligence is the only tool for providing \"Foresights\" to decision Maker",
        ans: true
    },
    {
        text: "Data Mining and \"What if\" analysis is the Business Intelligent tool for knowledge generation",
        ans: true
    },
    {
        text: "Data Viewing and Manipulation operations are tools used by OLAP to generate Ad-Hoc Reports for Decision Makers.",
        ans: true
    },
    {
        text: "\"Hierarchy of attributes\" is viewed as part of the design phases of the multi-dimenstional data warehouse",
        ans: true
    },
    {
        text: "Cairo University senior management DSS covers both the data-centered and the model-centered DSS analytical tools.",
        ans: true
    },
    {
        text: "Cairo University senior management DSS can be viewed as an integrated general purpose Decision Support System.",
        ans: true
    },
    {
        text: "Group decision support systems (GDSS) generally need additional software systems to manage communication and ideas generated by the members of the group.",
        ans: true
    },
    {
        text: "Simulation and optimization Models are mainly used to assess alternative options and investigate the impact of external conditions within a DSS environment.",
        ans: true
    },
    {
        text: "Business Intelligence can be viewed as a Model-centered DSS",
        ans: false
    },
    {
        text: "Instituionalization is an important phase in constructing special purpose DSS",
        ans: false
    },
    {
        text: "AHP is viewed as a Tool-based general purpose DSS",
        ans: false
    },
    {
        text: "\"Classification Rules\" are used to mine unsupervised data",
        ans: false
    },
    {
        text: "Extraction, Transformation and Loading (ETL) software is classified as a database management system (DBMS)",
        ans: false
    },
    {
        text: "Tacit Knowledge can be easily classified, documented and stored",
        ans: false
    },
    {
        text: "Analytical Data can be properly handled using a transaction processing database system",
        ans: false
    },
    {
        text: "In a strategic decision making process, external data are not strongly needed to support the policy maker",
        ans: false
    },
    {
        text: "Executive information system (EIS) is generally used to support middle management decisions",
        ans: false
    },
    {
        text: "The Interpretation capability of modeling language describes variables, structure and mathematical specification of a model.",
        ans: false
    },
    {
        text: "In a Data Centered DSS, OLAP tool provides insights whereas Data mining provides hindsights to the problem under consideration.",
        ans: false
    },
    {
        text: "In a decision support cycle, models are essentially needed to validate and approve a selected decision.",
        ans: false
    },
    {
        text: "Decision Support systems (DSS) is used to support reporting and database related capabilities along with few or simple analytical tools.",
        ans: false
    },
    {
        text: "Structured modeling language can be used to graphically implement and solve a mathematical programming model.",
        ans: false
    },
    {
        text: "General Purpose DSS should include analytical data and modeling tools that can be used in different DSS context and applications",
        ans: true
    },
    {
        text: "Algebraic modeling languages include solution algorithm (Solve) as an integral part of the language.",
        ans: false
    },
    {
        text: "Development Planning Support System (DPSS) can be viewed as general purpose addressing socioeconomic planning issues of Kuwait.",
        ans: true
    },
    {
        text: "Multi-dimensional Database model is designed and strictly needed to generate ad-hoc reports reflecting policy maker's view.",
        ans: true
    },
    {
        text: "The efficiency criteria of a modeling language is used to assess the effective communications with decision makers.",
        ans: false
    },
    {
        text: "Cairo University Senior Management DSS can be used to compare its performance with both private and public universities in Egypt.",
        ans: false
    },
    {
        text: "The explanation capability of modeling language describes modeling structure and mathematical specification of a model.",
        ans: true
    },

    {
        text: "The effectiveness criteria of a modeling language is used to assess the effective communications with decision makers.",
        ans: true
    },
    {
        text: "Information and Decision Support Center (IDSC) can be viewed as a general purpose addressing planning issues in Kuwait.",
        ans: false
    },
    {
        text: "Group decision support systems (GDSS) need additional software systems to manage ideas generated by the members of the group.",
        ans: true
    },
    {
        text: "In a model centered DSS, data warehousing and OLAP operations are needed but they do not represent its main concentration.",
        ans: true
    },
    {
        text: "Fisheries sector DSS in Kuwait relies mainly on an integer mathematical programming model.",
        ans: false
    },
    {
        text: "The explanation capability of VDSS language describes the structure and mathematical specification of a model.",
        ans: true
    },
    {
        text: "Information and Decision Support Center (IDSC) is viewed as a leading general purpose DSS in the Arab region that concentrates on socioeconomic issues.",
        ans: true
    },

    {
        text: "Development Planning support system (DPSS) is viewed as a special purpose DSS because it concentrates only on development planning issues.",
        ans: false
    },

    {
        text: "Multi-dimensional Database model is strictly needed to interact with the online analytical process (OLAP)",
        ans: true
    },
    {
        text: "Excel software is viewed as a specialized modeling language based on spread sheet approach",
        ans: true
    },
    {
        text: "The comprehensive set of solvers linked to GAMS enhance its effectiveness as a modeling language.",
        ans: false
    },
    {
        text: "The comprehensive set of solvers linked to GAMS enhance its efficiency as a modeling language.",
        ans: true
    },
    {
        text: "AHP is viewed as a Tool-based special purpose DSS",
        ans: true
    },
    {
        text: "General purpose DSS provides general software capabilities that can fit several applications",
        ans: true
    },
    {
        text: "Cairo university senior management DSS can be viewed as a data centered Decision Support System",
        ans: false
    },
    {
        text: "Multi-Dimensional database model is strictly need for developing the data warehouse of a DSS",
        ans: true
    },
    {
        text: "In a decision support cycle, models are essentially used to assess alternative scenarios and options as well as to estimate the cost and risk associated with a specific decision",
        ans: true
    },
    {
        text: "Analytical Data can be properly handled using a operational processing database system",
        ans: true
    },
    {
        text: "Star Schema can be viewed as a rational database model",
        ans: false
    },
    {
        text: "Star Schema can be viewed as a multi-dimensional database model",
        ans: true
    },

    {
        text: "AHP use hierarchical structure to represent goals, criteria and alternatives of decisions context",
        ans: true
    },
    {
        text: "Data Mining can be used to carry out “what-if” analysis.",
        ans: false
    },
    {
        text: "Simulation can be used to carry out “what-if” analysis.",
        ans: true
    },
    {
        text: "Data Mining needs a hypothetical model to compute statistics.",
        ans: false
    },
    {
        text: "What-If analysis is the main difference between data centered DSS and Business Intelligence.",
        ans: true
    },
    {
        text: "Extraction, Transformation and Loading (ETL) software is particularly designed to prepare data for mining operation.",
        ans: false
    },
    {
        text: "Extraction, Transformation and Loading (ETL) software is particularly designed to generate Data Marts",
        ans: false
    },
    {
        text: "Cube structure along with OLAP analytical operations are the main tools for generating, viewing, manipulating ad-hoc reporting.",
        ans: true
    },
    {
        text: "Data Marts can serve as a way for accelerating access for information and generating ad-hoc reports",
        ans: true
    },
    {
        text: "Data viewing based on OLAP operations uses drill down and rolling up and slice",
        ans: false
    },
    {
        text: "Data viewing based on OLAP operations uses dice and pivot and nesting",
        ans: true
    },
    {
        text: "Data warehouse is viewed as integrated, time-variant and subject-oriented analytical database",
        ans: true
    },

    {
        text: "Data warehouse separates analysis workload from transaction workload.",
        ans: true
    },
    {
        text: "Declarative modeling languages concentrate only on the solution strategy of optimization models",
        ans: false
    },
    {
        text: "Declarative modeling languages concentrate on the mathematical specification of the model as well as its solution strategy",
        ans: false
    },
    {
        text: "Declarative modeling languages concentrate only on mathematical specification of the model and the selection of its solvers.",
        ans: true
    },

    {
        text: "Instituionalization is an important phase in constructing general purpose DSS",
        ans: true
    },
    {
        text: "Model base and model base management system are part of the special purpose model centered DSS",
        ans: false
    },
    {
        text: "Model base and model base management system are part of the general purpose model centered DSS",
        ans: true
    },
    {
        text: "Hindsights and Insights are the type of analysis embedded in a model centered DSS.",
        ans: false
    },
    {
        text: "OLAP operations and ad-hoc reports can be used with model centered DSS",
        ans: true
    },
    {
        text: "In a decision support cycle, decision approval and follow up steps require complex mathematical models.",
        ans: false
    },
    {
        text: "Management Information Systems (MIS) is used to support reporting and database related capabilities along with few or simple analytical tools.",
        ans: true
    },
    {
        text: "Management information systems (MIS) relies on advanced analytical tools to support decision making.",
        ans: false
    },
    {
        text: "Management information systems (MIS) relies on simple analytical tools to support decision making.",
        ans: true
    },
    {
        text: "GAMS as an optimization language integrates solution algorithms in its structure",
        ans: false
    },
    {
        text: "Structured modeling language is based on the entity relationship database approach",
        ans: true
    },

    {
        text: "Multi-dimensional Database model is strictly needed to interact with the online transaction process (OLTP)",
        ans: false
    },
    {
        text: "Business Intelligence can be viewed as a data-centered DSS",
        ans: true
    },
    {
        text: "Simulation models are added to a business intelligence software system to allow for what if analysis in DSS",
        ans: true
    },
    {
        text: "Both IDSC and DPSS general purpose DSS tools uses an issue-oriented approach to support the decision-making process",
        ans: true
    },
    {
        text: "In business intelligence systems, data mining models support policy experiments",
        ans: false
    },
    {
        text: "Hierarchical representation (or structure) of a problem is not a necessary step in developing a special purpose DSS using analytic hierarchy process (AHP).",
        ans: false
    },
    {
        text: "General Purpose DSS is broadly classified into Data, Model and Knowledge centered Decision support systems",
        ans: true
    },
    {
        text: "Analytical database (based on data warehousing technology) is generally needed by most of the DSS types.",
        ans: true
    },
    {
        text: "GAMS as a modelling language relies on graphical model building approach.",
        ans: false
    }
];

export default dss;