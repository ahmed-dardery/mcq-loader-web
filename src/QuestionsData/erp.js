import erp1 from './images/erp/erp1.png';
import erp2 from './images/erp/erp2.png';
import erp3 from './images/erp/erp3.png';
import erp4 from './images/erp/erp4.png';

const erp = [
    {
        img: erp1,
        text: "What type of data is represented in the exhibit?",
        options: ["Structured",
            "Semi-structured",
            "Quasi-structured",
            "Unstructured",
        ]
    },
    {
        text: "What are considerations in a data science and Big Data analytics project?",
        options: ["Analysis flexibility and decision making",
            "Ignoring executive stakeholders and business users",
            "Building data silos and bypassing data privacy rules",
            "Applying the latest technologies to demonstrate technical skills",
        ]
    },
    {
        text: "In addition to quantitative and technical skills, what is a key aspect of the profile of a data scientist?",
        options: ["Curious and creative",
            "Project management and administrative skills",
            "Accounting and regulatory skills",
            "Proficient in Microsoft Project and Excel",
        ]
    },
    {
        text: "What is the correct order of phases in the data analytics lifecycle once the Discovery phase is complete?",
        options: ["Data preparation, Model planning, Model building, Communicate results, Operationalize",
            "Data preparation, Operationalize, Model building, Model planning, Communicate results",
            "Data preparation, Operationalize, Model planning, Model building, Communicate results",
            "Data preparation, Model planning, Model building, Operationalize, Communicate results",
            "Data preparation, Model building, Model planning, Communicate results, Operationalize",
            "Data preparation, Model building, Model planning, Operationalize, Communicate results",
        ]
    },
    {
        text: "What activities occur during the discovery phase of the data analytics lifecycle?",
        options: ["Interview project sponsor and stakeholders",
            "Deploy and monitor model performance",
            "Build training and test datasets",
            "Perform ETL and data exploration",
        ]
    },
    {
        text: "What tasks need to be completed when designing an analytic sandbox?",
        options: ["Estimate the size of the dataset and plan for 5-10 times the size",
            "Establish the database tables for extract, translate, and load",
            "Define the hardware and Hadoop network requirements",
            "Discuss with business experts the best ways to join different datasets",
        ]
    },
    {
        text: "During the data preparation phase, you notice a high correlation between average spend on video games, age of players, and number of science fiction shows watched. Which technique could you use to address the three correlated variables?",
        options: ["Combine the three variables into one new variable",
            "Square the three variables to remove the correlation",
            "Drop the three variables to improve the model",
            "Use scaling to make the three variables equivalent in size",
        ]
    },
    {
        text: "After which phase of the data analytics lifecycle should you determine if the model is robust enough?",
        options: ["Model building",
            "Operationalize",
            "Data preparation",
            "Discovery",
        ]
    },
    {
        text: "A data scientist is investigating a new database column that needs to be integrated into their model. The column contains 10,000 labels with 300 unique values. Which data structure should be used when working in R?",
        options: ["Factor",
            "Array",
            "Data frame",
            "List",
        ]
    },
    {
        text: "What are two data categories that represent quantitative data?",
        options: ["Ratio and interval",
            "Nominal and ratio",
            "Nominal and ordinal",
            "Ordinal and interval",
        ]
    },
    {
        text: "What is the difference between the array and list data structures in R?",
        options: ["Arrays contain only the same data type; Lists can contain different data types",
            "Arrays are N-dimensional; Lists are only 2-dimensional",
            "Arrays are only 2-dimensional; Lists are N-dimensional",
            "Arrays can contain different data types; Lists can contain only the same data type",
        ]
    },
    {
        text: "You have created a scatterplot of two continuous variables for 2000 records. You want to add a line to the scatterplot to check linearity of the data. Which function would best address this need?",
        options: ["abline()",
            "hist()",
            "lm()",
            "glm()",
        ]
    },
    {
        text: "During a study to understand the population growth of a certain bacterial culture, you plot the data and identify a quadratic growth trend over time. Which transformation should you apply to linearize the data?",
        options: ["Square root",
            "Square",
            "Add a constant",
            "Cube",
        ]
    },
    {
        text: "You have numeric data for more than 500 observations. You are interested in identifying linear relationships among these numeric variables. Which R function should you employ to get the best visualization?",
        options: ["pairs()",
            "lm()",
            "rug()",
            "plot(density())",
        ]
    },
    {
        text: "In a t-test with unknown variance, what values are used to calculate the t-statistic?",
        options: ["Sample mean, sample standard deviation, and sample size",
            "Mean, standard deviation, and population size",
            "Sample mean, standard deviation, and sample size",
            "Mean, sample standard deviation, and population size",
        ]
    },
    {
        text: "Which of the following is used to calculate sample variance",
        options: ["sum (x_i - x_bar)^2 / (n-1)",
            "sum |x_i - x_bar| / (n-1)",
            "sum |x_i + x_bar| / n",
            "sum (x_i + x_bar)^2 / n",
        ]
    },
    {
        text: "You need to run a hypothesis test across three normally distributed populations. Which technique should you use?",
        options: ["ANOVA",
            "Wilcoxon rank sum test",
            "Welch's t-test",
            "Z-test",
        ]
    },
    {
        text: "You have an automotive database containing numeric characteristics such as engine size, horsepower, and top speed. Which technique could you use to group similar cars together?",
        options: ["K-means clustering",
            "Association rules",
            "Logistic regression",
            "Naïve Bayes classifier",
        ]
    },
    {
        text: "What is the output of the K-means clustering algorithm?",
        options: ["Center of each discovered cluster and mapping of each record to a cluster",
            "Centroid positioning and entropy of each record in each cluster",
            "Intercept and coefficients for each input variable in the dataset",
            "Two dimensional representation of the data and the clusters",
        ]
    },
    {
        text: "A study was run to identify general dietary patterns among the residents of a small town. Twelve thousand people were surveyed and the data was subject to K-means clustering. In one of the iterations, there were six clusters formed with 38, 1560, 1799, 2560, 2893, and 3150 respondents. What should be the next step in identifying optimal clusters?",
        options: ["Determine the optimal number of clusters by plotting the Within Sum of Squares (WSS) values as a function of K",
            "Remove 38 respondents because the 5 clusters seem to be well distributed",
            "Add more categorical variables to the dataset to maximize the Within Sum of Squares (WSS) value for K=6",
            "Multiply each variable by its standard deviation",
        ]
    },
    {
        img: erp2,
        text: "Refer to the exhibit, which shows pairwise counts for items purchased together. Which rule has a confidence higher than 70%?",
        options: ["Eggs -> Milk",
            "Milk -> Eggs",
            "Bread -> Milk",
            "Milk -> Bread",
        ]
    },
    {
        text: "In association rules, given X -> Y, what is confidence?",
        options: ["Percentage of transactions with X that also contain Y",
            "Difference in the probability of X and Y appearing together compared with expectations if they were statistically independent",
            "How many times more often X and Y occur together than expected if they were statistically independent, expressed as a ratio",
            "Percentage of transactions that contain the itemset",
        ]
    },
    {
        text: "In association rules, for itemsets X and Y, which expression defines leverage?",
        options: ["Support(X ∪ Y) - Support(X) * Support(Y)",
            "Support(X ∩ Y) - Support(X) * Support(Y)",
            "Support(X ∪ Y) / (Support(X) * Support(Y))",
            "Support(X ∩ Y) / (Support(X) * Support(Y))",
        ]
    },
    {
        text: "Which statement about linear regression is correct?",
        options: ["Outcome variable is continuous",
            "All input variables must be continuous",
            "All input variables must be discrete",
            "Outcome variable is discrete",
        ]
    },
    {
        img: erp3,
        text: "What is the approximate R-squared value for a linear regression model fitted to the data associated with this scatterplot?",
        options: ["0.01",
            "0.96",
            "4",
            "16",
        ]
    },
    {
        text: "Which analytic technique would be appropriate to estimate blood pressure based on age and weight?",
        options: ["Linear regression",
            "K-means clustering",
            "Time series analysis",
            "Naïve Bayesian classification",
        ]
    },
    {
        text: "What is a good use case for logistic regression?",
        options: ["Predicting the outcome of an election",
            "Predicting home sales prices in a city",
            "Forecasting quarterly sales of a company",
            "Predicting the income of a customer",
        ]
    },
    {
        text: "What does the Receiver Operating Characteristic (ROC) curve show?",
        options: ["Relationship between true positive rate and false positive rate",
            "Relationship between p-value and true positive rate",
            "Relationship between p-value and true negative rate",
            "Relationship between true positive rate and true negative rate",
        ]
    },
    {
        text: "In logistic regression modeling, what is the commonly assigned probability threshold used to assign a class label?",
        options: ["0.5",
            "0.1",
            "0.25",
            "0.9",
        ]
    },
    {
        text: "An IT department deployed a spam filter to reduce the amount of junk e-mail received by its employees. After six months, they notice that the spam filter is less effective than when initially deployed. They examine the system running the spam filter and it appears to be operating normally. What action would improve the effectiveness of the spam filter?",
        options: ["Retrain the spam filter with newer examples of spam emails",
            "Create a linear regression model to calculate the probability of an email being spam",
            "Add more storage to the spam filtering system",
            "Add more processing power to the spam filtering system",
        ]
    },
    {
        text: "How is dimensionality defined in a 'bag of words' document representation?",
        options: ["Number of unique terms in the document",
            "Frequency of repeated words in the document",
            "Total number of words in the document",
            "Average number of words per sentence in the document",
        ]
    },
    {
        text: "Consider the following text: \"Aren't you glad that there are all these toys. Are you taking any for the children?\" What is the term frequency for the word are in the text with both case folding and a tokenizer applied to punctuation?",
        options: ["2",
            "0",
            "1",
            "3",
        ]
    },
    {
        text: "In naïve Bayes implementations, how is the possibility of zero probabilities resulting from unobserved attribute/classifier pairs properly handled?",
        options: ["Add a small quantity to each of the observed counts",
            "Add a large quantity to each of the observed counts",
            "Square the observed counts",
            "Double the observed counts",
        ]
    },
    {
        text: "A fair six-sided die is rolled. Let A denote the event that an odd number is rolled. Let C denote the event that a 1, 2, or 3 is rolled. What is the value of the conditional probability, P(C|A)?",
        options: ["2/3",
            "1/3",
            "1/4",
            "1/2",
        ]
    },
    {
        img: erp4,
        text: "Refer to the exhibit. To predict whether or not a customer will renew their annual property insurance policy, an insurance company built and operationalized a naïve Bayes classification model.\nIn the model, there are two class labels, renewal and non-renewal, that are assigned to each customer based on their attributes.\nA subset of the key attributes, their values, and corresponding conditional probabilities are provided in the exhibit.\nA customer has the following attributes:\n• Age is greater than 65 years\n• Owns their own home\n• Renewal month is August\nIf 20% of customers do not renew their policies every year, what is the score for a non-renewal in the naïve Bayesian model for the customer described above?",
        options: ["0.0004",
            "0.0002",
            "0.002",
            "0.004",
        ]
    },
    {
        text: "What is a consideration when building decision trees?",
        options: ["Tree structure is sensitive to small changes in the training data",
            "Cannot handle variables that affect the outcome in a discontinuous way",
            "Correlated variables can cause double-counting",
            "Short decision trees are likely subject to overfit",
        ]
    },
    {
        text: "In a decision tree, what is an example of a pure node?",
        options: ["100 positives; 0 negatives",
            "25 positives; 75 negatives",
            "50 positives; 50 negatives",
            "75 positives; 25 negatives",
        ]
    },
    {
        text: "What does a leaf node represent in a decision tree?",
        options: ["Assigned class label",
            "Decision point on a variable",
            "Root of the decision tree",
            "Outcome of a test on a variable",
        ]
    },
    {
        text: "In a fitted ARIMA(1,2,3) model, how many differences are applied?",
        options: ["2",
            "0",
            "1",
            "3",
        ]
    },
    {
        text: "In time series analysis, what function is examined to identify the order of the moving average component of an ARIMA model?",
        options: ["Autocorrelation function",
            "Geometric mean function",
            "Arithmetic mean function",
            "Exponential function",
        ]
    },
    {
        text: "In time series analysis, what is an indication of a stationary sequence?",
        options: ["Constant variance",
            "Decreasing trend",
            "Seasonality",
            "Increasing trend",
        ]
    },
    {
        text: "What are challenges presented by Big Data?",
        options: ["New technologies, tools, business processes, and regulatory rules",
            "New technologies, tools, and business processes only",
            "New technologies, and tools only",
            "New technologies, tools and regulatory rules only",
        ]
    },
    {
        text: "What is the optimal usage scenario for the Hadoop Distributed File System?",
        options: ["Large files and high throughput",
            "Large files and low latency",
            "Small files and low latency",
            "Small files and high throughput",
        ]
    },
    {
        text: "Which Hadoop service is responsible for requesting resources for, and monitoring the completion of, MapReduce processes?",
        options: ["Application Master",
            "DataNode",
            "Application Manager",
            "NameNode",
        ]
    },
    {
        text: "What requests resources from YARN during a MapReduce job?",
        options: ["ApplicationMaster",
            "ApplicationsManager",
            "DataNodes",
            "Map and reduce tasks",
        ]
    },
    {
        text: "How does an HBase data structure differ from an ANSI standard relational database management system (RDBMS)?",
        options: ["HBase supports a single table with no implicit join ability to other tables; ANSI standard RDBMS supports multiple tables with join ability",
            "HBase provides a wider variety of predefined data types for data; ANSI standard RDBMS provides less variety",
            "HBase has strongly defined data columns; ANSI standard RDBMS is more flexible with column definitions",
            "HBase is challenged by sparse data; ANSI standard RDBMS handles missing values well by using null fields",
        ]
    },
    {
        text: "What provides an extensive library of algorithm building tools to be used with the Hadoop ecosystem?",
        options: ["Mahout",
            "Hive",
            "HBase",
            "Pig",
        ]
    },
    {
        text: "What are categorized as data ingestion tools for Hadoop?",
        options: ["Flume, Sqoop, and Storm",
            "Drill, Hive, and HBase",
            "Ambari, Oozie, and Zookeeper",
            "Spark, Tez, and Cassandra",
        ]
    },
    {
        text: "Consider the following SQL query: 'SELECT product_id FROM supplier_A UNION SELECT product_id FROM supplier_B;'. What is the expected result?",
        options: ["All product_id values from both tables with no duplicates or repeating rows",
            "All product_id values from supplier_B table but not from supplier_A table",
            "All product_id values from supplier_A table but not from supplier_B table",
            "All product_id values from both tables with duplicates or repeating rows",
        ]
    },
    {
        text: "Which SQL OLAP grouping extension is used to provide hierarchical groupings without examining all possible combinations?",
        options: ["ROLLUP",
            "CUBE",
            "GROUNPING",
            "GROUP_ID",
        ]
    },
    {
        text: "What provides the means for matching and manipulating text strings in SQL?",
        options: ["Regular expressions",
            "TF-IDF",
            "PACF",
            "Association rules",
        ]
    },
    {
        text: "Consider this SQL statement: 'SELECT product, prod_cost, avg(prod_cost) OVER (PARTITION BY product) FROM product_detail'. The OVER clause makes this what type of function?",
        options: ["Window function",
            "Aggregate function",
            "User-defined function",
            "System function",
        ]
    },
    {
        text: "Consider the following SQL statement:\nSELECT employee_id, year, salary, avg(salary)\nOVER\n(PARTITION BY employee_id ORDER BY year ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as result_1\nFROM employee\nORDER BY employee_id, year\nFor each employee_id, what is returned as result_1?",
        options: ["Three year rolling average salary",
            "Average employee_id",
            "Average salary across all employee_id values",
            "Four year rolling average salary",
        ]
    },
    {
        text: "In a user-defined aggregate function, what is SFUNC?",
        options: ["State transition function",
            "Segment-level calculation function",
            "Window function",
            "Final calculation function",
        ]
    },
    {
        text: "After which phase of the data analytics lifecycle should you determine the best way to integrate solutions with production systems?",
        options: ["Communicate results",
            "Data preparation",
            "Model planning",
            "Discovery",
        ]
    },
    {
        text: "Which participant in a data analytics project is typically responsible for assessing the validity of the model?",
        options: ["Data scientist",
            "Business user",
            "Project manager",
            "Project sponsor",
        ]
    },
    {
        text: "What is a key consideration when preparing a presentation intended for sponsors?",
        options: ["Emphasize the business benefits of implementing the model",
            "Provide details on model planning and building",
            "Describe how current processes may be affected",
            "Describe how to implement the model",
        ]
    },
    {
        text: "Which component of a final presentation focuses on how to deploy the model?",
        options: ["Recommendations",
            "Executive summary",
            "Approach",
            "Project goals",
        ]
    },
    {
        text: "Which chart type is intended to display correlations between sets of numeric data?",
        options: ["Scatterplot",
            "Pie chart",
            "Line Chart",
            "Histogram",
        ]
    },
    {
        text: "Which visualization technique should be avoided?",
        options: ["Using three-dimensional charts",
            "Achieving a high data-ink ratio",
            "Using visuals to illustrate key points",
            "Using a small number of contrasting colors to draw distinctions",
        ]
    }
]

export default erp;