import erp5 from './images/erp/erp5.png';

const erp3amaly = [
    {
        text: "What is the correct sequence of phases of the Data Analytics Lifecycle?",
        options: ["Understand the business problem, Identify factors and data, Create the model, Communicate results",
            "Understand the business problem, Create the model, Identify factors and data, Communicate results",
            "Understand the business problem, Create the model, Communicate results, Identify factors and data",
            "Identify factors and data, Understand the business problem, Create the model, Communicate results",
            "Identify factors and data, Understand the business problem, Communicate results, Create the model",
        ]
    },
    {
        text: "During which phase of the Data Analytics Lifecycle are Hadoop ecosystem tools often used?",
        options: ["Data Preparation",
            "Communicate Results",
            "Discovery",
            "Model Planning",
        ]
    },
    {
        text: "What is the correct syntax for loading a .csv file into the R workspace?",
        options: ["read.table('c:/documents/file.csv', sep=',', header = TRUE)",
            "table.read('c:/documents/file.csv', sep=',', header = TRUE)",
            "read.table('c:\\documents\\file.csv', sep=',', header = TRUE)",
            "table.read('c:\\documents\\file.csv', sep=',', header= TRUE)",
        ]
    },
    {
        text: "What should be shared with the Project Sponsor when communicating results?",
        options: ["Business impact of implementing the model",
            "Technical document on how to build the model",
            "How business reports will change",
            "Code used for building the model",
        ]
    },
    {
        text: "In which Data Analytics Lifecycle phase is it advised to develop an initial hypothesis?",
        options: ["Discovery",
            "Data Preparation",
            "Model Building",
            "Communicate Results",
        ]
    },
    {
        text: "'M' is a matrix with 10,000 rows and 500 columns. By default, what is the effect of executing the command head(M) in R?",
        options: ["Shows all columns for the top 6 rows",
            "Shows all columns for the top 10 rows",
            "Creates a table with the name 'head'",
            "Shows the first column of the top 6 rows",
        ]
    },
    {
        text: "What are the key characteristics of Big Data?",
        options: ["Volume, velocity, and variety",
            "Variety, range, and velocity",
            "Volume, size, and value",
            "Vibrant, variety, and valor",
        ]
    },
    {
        text: "What is a key criterion for any Big Data project?",
        options: ["Analysis flexibility",
            "long wait times for results",
            "Data sets are uploaded in batches",
            "Hundred percent accurate prediction",
        ]
    },
    {
        text: "Which key business driver for analytics used by businesses is an example of customer churn?",
        options: ["Identify the business risk",
            "Optimize supply chain management",
            "Predict new business opportunities",
            "Comply with laws or regulatory requirements",
        ]
    },
    {
        text: "Which symbol represents the null hypothesis?",
        options: ["H_0",
            "H^0",
            "H0",
            "H_1",
        ]
    },
    {
        text: "Into which four levels of measurement can data be classified?",
        options: ["Ordinal, nominal, ratio, and interval",
            "Ordinal, numeric, ratio, and integer",
            "Object, nominal, ratio, and integer",
            "Object, numeric, ratio, and interval",
        ]
    },
    {
        text: "In R, which type of graph should be used if there are too many records to obseive the structure of a scatterplot?",
        options: ["Hexbin plot",
            "Multiple pairwise plots",
            "Histogram",
            "Box and whisker plot",
        ]
    },
    {
        text: "Which package is used in R for rich composite graphs?",
        options: ["ggplot2",
            "MASS",
            "Graphics",
            "HTTR",
        ]
    },
    {
        text: "What is a consideration when choosing a Naiive Bayesian model for a business problem?",
        options: ["Numerical values cannot be handled well",
            "Categorical values cannot be handled",
            "Implementation is very difficult",
            "Missing values are not handled well",
        ]
    },
    {
        text: "How is the false positive rate (FPR) calculated?",
        options: ["FPR = false positives / all negatives",
            "FPR = all positives / false positives",
            "FPR = false positives / true positives",
            "FPR = false positives / all positives",
        ]
    },
    {
        text: "The data frame 'data' contains 50,000 records of household income data, Each record contains 200 attributes, such as the number of occupants and education level. What will be the effect of executing the command subdata <- data[1:100,] in R?",
        options: ["All columns and the first 100 rows are copied from 'data' to 'subdata'",
            "All rows and all columns are copied from 'data' to 'subdata'",
            "First 100 rows and the first 100 columns are copied from ' data' to 'subdata'",
            "All rows for the first 100 columns are copied from 'data' to 'subdata'",
        ]
    },
    {
        text: "In k-means clustering, if you cannot initially decide on the k (number of clusters) for a given data set, which plot can you use to help select k?",
        options: ["Within sum of squares",
            "Box and whisker",
            "Multiple pairwise",
            "Differences of mean",
        ]
    },
    {
        text: "What is HDFS?",
        options: ["Distributed datastore for Hadoop",
            "Mapper and Reducer",
            "NameNode",
            "Job Tracker",
        ]
    },
    {
        text: "Which Hadoop service acts as a regulator/resolver between a client and the data node servers?",
        options: ["NameNode",
            "Task Manager",
            "Host Bus Adapter",
            "Master node",
        ]
    },
    {
        text: "When is it appropriate to move beyond the Model Building phase of the Data Analytics lifecycle?",
        options: ["Model is sufficiently robust",
            "Initial hypothesis is clear",
            "Data sets for the model are identified",
            "Model works on a small subset of the data",
        ]
    },
    {
        text: "A data science team is studying the financial conditions of the health services industry in a given country. In which phase of the Data Analytics Lifecycle is the team?",
        options: ["Discovery",
            "Data Preparation",
            "Model Planning",
            "Model Building",
        ]
    },
    {
        text: "Into which structures can data be broadly classified?",
        options: ["Structured, semi-structured, quasi-structured, and unstructured",
            "RDBMS, e-mail header, XML file, and image",
            "Semi-structured, half-structured, quarter-structured, and quasi-structured",
            "Structured, organized, unorganized, and unstructured",
        ]
    },
    {
        text: "What is a use case for time series analysis?",
        options: ["Stock price of a company on the following day",
            "Impact of CO2 emissions on global warming",
            "Power consumption of a nation over the following decade",
            "Weather forecast for the entire following year",
        ]
    },
    {
        text: "Consider the linear regression equation y = 0.7 + 2.5x. What will be the res ult of a single unit increase in the value of 'x'?",
        options: ["y increases by 2.5 units",
            "y increases by .07 units",
            "y increases by 0. 7 times",
            "y increases by 2.5 times",
        ]
    },
    {
        text: "What is the main consideration for conducting a Student's t-test or Welch's t-test?",
        options: ["Normally distributed data is assumed",
            "No assumptions about the distribution of data are required",
            "Test cannot be conducted for very large data sets",
            "Type I and Type II errors are assumed to be equal",
        ]
    },
    {
        text: "What is the importance of the p-value in a hypothesis test such as the Wilcoxon Rank-Sum test?",
        options: ["If the p-value is small (< 0.05), the null hypothesis should be rejected",
            "If the p-value is small (< 0.05), the null hypothesis should be accepted",
            "If the p-value is large (> 0.05), the null hypothesis should be rejected",
            "p-value does not determine whether the null hypothesis should be accepted or rejected",
        ]
    },
    {
        text: "Which topic should NOT be considered when creating a presentation for project sponsors?",
        options: ["Technical code for implementing the model",
            "Key messages to consider in the decision-making process",
            "'Big picture' takeaways for executive level stakeholders",
            "'Clean' visuals for the viewer to grasp",
        ]
    },
    {
        text: "What does the Data Analytics Lifecycle help you do when working on a Big Data project? Review Later",
        options: ["Provide project guidelines",
            "Design the data warehouse",
            "Visualize the data",
            "Clean the data",
        ]
    },
    {
        text: "What is Hadoop?",
        options: ["Java Classes for managing HDFS and MapReduce jobs",
            "Popular relational database",
            "Big Data commodity storage",
            "Framework that allows parallel processing of all types of data",
        ]
    },
    {
        text: "Which type of graph is recommended for visualizing a single variable? CJ Review Later",
        options: ["Histogram",
            "Any 3-D plot	",
            "Hexbin plot",
            "Multiple pairwise plots",
        ]
    },
    {
        text: "How would a receiver operating characteristics (ROC) curve plot be represented?",
        options: ["False positive rate on the X-axis and true positive rate on the Y-axis",
            "False positive rate on the X-axis and true negative rate on the Y-axis",
            "False positives on the X-axis and true positives on the Y-axis",
            "False positives on the X-axis and true negatives on the Y-axis",
        ]
    },
    {
        text: "Which package is used in R for working on Na'fve Bayesian classifiers?",
        options: ["e1071",
            "e1001",
            "e1100",
            "e1701",
        ]
    },
    {
        text: "What makes data stationary while using time series analysis?",
        options: ["Seasonal adjustment",
            "De-trending",
            "ACF",
            "PACF",
        ]
    },
    {
        text: "What is HBase?",
        options: ["Database built on HDFS supporting random, real-time reads and writes",
            "Query language based on SQL for building MapReduce jobs",
            "Data flow language and execution environment",
            "Coordination service for building distributed applications",
        ]
    },
    {
        text: "What is Mahout?",
        options: ["Set of machine learning algorithms that leverages Hadoop",
            "Online repository for machine learning algorithms that can be used in R",
            "Online library that provides eBooks on machine learning topics",
            "SQL-like language that runs on top of Hadoop",
        ]
    },
    {
        text: "Into which four levels of measurement can data be classified?",
        options: ["Ordinal, nominal, ratio, and interval",
            "Object, nominal, ratio, and integer",
            "Object, numeric, ratio, and interval",
            "Ordinal, numeric, ratio, and integer",
        ]
    },
    {
        img: erp5,
        text: "Refer to the graphic. Which action will clear the chart junk?",
        options: ["Removing the vertical grid lines",
            "Removing the legend on the right",
            "Adding horizontal grid lines",
            "Removing the chart title",
        ]
    },
    {
        text: "What is a primary consideration when implementing an Apriori algorithm as a model?",
        options: ["It is very complicated, so it is not easy to implement",
            "It is not easy to parallelize given its level of complexity",
            "It does not find any coincidental relationships",
            "It has exponential time complexity, so multiple database scans are needed",
        ]
    },
    {
        text: "Which text strings are matched by the regular expression '^green*'?",
        options: ["Any string starting with green",
            "Any string with green in the middle",
            "Any string with ^green* in the middle",
            "Any string ending with green",
        ]
    },
    {
        text: "How is the true positive rate (TPR) calculated?",
        options: ["TPR = true positives / all positives",
            "TPR = all positives / true positives",
            "TPR = true positives / false positives",
            "TPR = true positives / false negatives",
        ]
    },
    {
        text: "A database application user wants to combine two tables using a common field. The user uses SQL to compare each row of table 'right' to each row of table 'left'. Only the matching rows are returned as part of the result set. Which SQL operation is being used?",
        options: ["Full outer join",
            "Right outer join",
            "Inner join",
            "Cross join",
        ]
    },
    {
        text: "What is a primary consideration when implementing an Apriori algorithm as a model?",
        options: ["It is not easy to parallelize given its level of complexity",
            "It is very complicated, so it is not easy to implement",
            "It does not find any coincidental relationships",
            "It has exponential time complexity, so multiple database scans are needed",
        ]
    },
    {
        text: "What is the primary disadvantage of selecting a 3-dimensional chart?",
        options: ["Difficult to measure the actual data",
            "Cannot include a legend",
            "Focuses on data, not graphics",
            "Too difficult to create",
        ]
    },
    {
        text: "A financial services company needs to separate its customers into groups based on age and income. Which method should the company use?",
        options: ["K-means clustering",
            "Linear regression",
            "Time series analysis",
            "Decision trees",
        ]
    },
    {
        text: "An eCommerce company wants to increase sales by recommending bundles of items that are generally purchased together to its web visitors. Which technique should be used to create an analytical model?",
        options: ["Apriori algorithm",
            "Linear regression",
            "Time series analysis",
            "K-means clustering",
        ]
    },
    {
        text: "How would the lift to evaluate the appropriateness of candidate rule x -> y for the Apriori algorithm be calculated?",
        options: ["lift (X -> Y) = Support (x ∪ y) / (Support (x) * Support (y))",
            "lift (X -> Y) = Support (x ∪ y) / Support (x) - Support (y)",
            "lift (X -> Y) = Support (x) - Support(y) / Support (x ∪ y)",
            "lift (X -> Y) = Support (x) * Support(y) / Support (x ∪ y)",
        ]
    },
    {
        text: "Which library is used by Greenplum for in-database analytics?",
        options: ["MADlib",
            "Mahout library",
            "In-database library",
            "Analytics library",
        ]
    },
    {
        text: "When should the use of the PIG language for Hadoop be avoided?",
        options: ["Working on a small portion of a dataset",
            "Performing real-time processing of a dataset",
            "Working on an entire dataset",
            "Working on unstructured data",
        ]
    },
    {
        text: "A company is planning to offer a discount on their products to increase sales during a holiday season. What is the most appropriate null hypothesis?",
        options: ["Offered discount has no effect on sales",
            "Offered discount has minor effect on sales",
            "Offered discount nullifies the company's profit",
            "Offered discount either has an effect or does not have any effect on sales",
        ]
    },
    {
        text: "Which package is used to create a decision tree for a given data set in R?",
        options: ["Rpart",
            "Rparted",
            "Dtree",
            "Decisiontree",
        ]
    },
    {
        text: "Which classifier is highly recommended for analyzing business problems involving non-linear or discontinuous inputs?",
        options: ["Decision trees",
            "Time series analysis",
            "Logistic regression",
            "Naiive Bayes",
        ]
    },
    {
        text: "What is a key activity of a data scientist?",
        options: ["Reframe business challenges as analytics challenges",
            "Conduct research for years",
            "Create quarterly sales reports",
            "Analyze a small data set that is provided",
        ]
    },
    {
        text: "What is a key criterion for any Big Data project?",
        options: ["Analysis flexibility",
            "Data sets are uploaded in batches",
            "Hundred percent accurate prediction",
            "Long wait times for results",
        ]
    },
    {
        text: "What is a key advantage of an analytic sandbox over an enterprise data warehouse?",
        options: ["Enables in-database processing",
            "Owned by the database administrator",
            "Holds pre-processed data",
            "Supports business intelligence and reporting",
        ]
    },
    {
        text: "During which phase of the Data Analytics Lifecycle is it necessary to determine which analytical methods will meet the business objectives?",
        options: ["Model Planning",
            "Data Preparation",
            "Discovery",
            "Model Building",
        ]
    },
    {
        text: "What is NOT a tool used for visualization?",
        options: ["SQL",
            "Spotfire",
            "R",
            "Tableau",
        ]
    },
    {
        text: "When using the CART algorithm to create a decision tree, which information gain determines the corresponding attribute to be selected next for partitioning?",
        options: ["0.56",
            "0.05",
            "0.38",
            "0.49",
        ]
    }
]

export default erp3amaly;