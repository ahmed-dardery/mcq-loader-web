const erpextra = [
    {
        text: "You submit a Map Reduce job to a Hadoop cluster. However, you notice that although the job was successfully submitted, it is not completing. What should be done to identify the issue?",
        options: ["Ensure TaskTracker is running",
            "Ensure DataNode is running",
            "Ensure NameNode is running",
            "Ensure JobTracker is running",
        ]
    },
    {
        text: "In the Map Reduce framework, what is the purpose of the Reduce function?",
        options: ["It aggregates the results of the Map function and generates processed output",
            "It writes the output of the Map function to storage",
            "It breaks the input into smaller components and distributes to other nodes in the cluster",
            "It distributes the input to multiple nodes for processing",
        ]
    },
    {
        text: "How does Pig's use of a schema differ from that of a traditional RDBMS?",
        options: ["Pig's schema is optional",
            "Pig's schema supports a single data type",
            "Pig's schema requires that the data is physically present when the schema is defined",
            "Pig's schema is required for ETL",
        ]
    },
    {
        text: "Before you build an ARMA model, how can you tell if your time series is weakly stationary?",
        options: ["There appears to be a constant variance around a constant mean.",
            "There appears to be no apparent trend component.",
            "The series is normally distributed.",
            "The mean of the series is close to 0.",
        ]
    },
    {
        text: "You have two tables of customers in your database. Customers in cust_table_1 were sent an e-mail promotion last year, and customers in cust_table_2 received a newsletter last year.\nCustomers can only be entered in once per table. You want to create a table that includes all customers, and any of the communications they received last year.\nWhich type of join would you use for this table?\n",
        options: ["Full outer join",
            "Inner join",
            "Cross join",
            "Left outer join",
        ]
    },
    {
        text: "You have used k-means clustering to classify behavior of 100, 000 customers for a retail store. You decide to use household income, age, gender and yearly purchase amount as measures. You have chosen to use 8 clusters and notice that 2 clusters only have 3 customers assigned.  What should you do?",
        options: ["Decrease the number of clusters",
            "Identify additional measures to add to the analysis",
            "Increase the number of clusters",
            "Decrease the number of measures used",
        ]
    },
    {
        text: "Your colleague, who is new to Hadoop, approaches you with a question. They want to know how best to access their data. This colleague has a strong background in data flow languages and programming.\nWhich query interface would you recommend?",
        options: ["Pig",
            "Hive",
            "Howl",
            "HBase",
        ]
    },
    {
        text: "What is Hadoop?",
        options: ["Java classes for HDFS types and Map Reduce job management and HDFS",
            "Map Reduce paradigm and massive unstructured data storage on commodity hardware",
            "Java classes for HDFS types and Map Reduce job management and the Map Reduce paradigm",
            "Map Reduce paradigm and HDFS",
        ]
    },
    {
        text: "How are window functions different from regular aggregate functions?",
        options: ["Rows retain their separate identities and the window function can access more than the current row.",
            "Rows are grouped into an output row and the window function can only access the current row.",
            "Rows are grouped into an output row and the window function can access more than the current row.",
            "Rows retain their separate identities and the window function can only access the current row.",
        ]
    },
    {
        text: "For which class of problem is Map Reduce most suitable?",
        options: ["Embarrassingly parallel",
            "Non-overlapping queries",
            "Simple marginalization tasks",
            "Minimal result data",
        ]
    },
    {
        text: "What is an example of a null hypothesis?",
        options: ["that a newly created model does not provide better predictions than the currently existing model",
            "that a newly created model provides a prediction that will be well fit to the null distribution",
            "that a newly created model provides a prediction of a null sample mean",
            "that a newly created model provides a prediction of a null population mean",
        ]
    },
    {
        text: "Your customer provided you with 2,000 unlabeled records and asked you to separate them into three groups. What is the correct analytical method to use?",
        options: ["K-means clustering",
            "Logistic regression",
            "Naive Bayesian classification",
            "Linear regression",
        ]
    },
    {
        text: "Your organization has a website where visitors randomly receive one of two coupons. It is also possible that visitors to the website will not receive a coupon.\nYou have been asked to determine if offering a coupon to visitors to your website has any impact on their purchase decision. Which analysis method should you use?",
        options: ["One-way ANOVA",
            "Student T-test",
            "Association rules",
            "K-means clustering",
        ]
    },
    {
        text: "What are considerations in a data science and Big Data analytics project?",
        options: ["Analysis flexibility and decision making",
            "Building data silos and bypassing data privacy rules",
            "Ignoring executive stakeholders and business users",
            "Applying the latest technologies to demonstrate technical skills",
        ]
    },
    {
        text: "You have run the association rules algorithm on your data set, and the two rules {banana, apple} => {grape} and {apple, orange}=> {grape} have been found to be relevant. What else must be true?",
        options: ["{grape, apple, orange} must be a frequent itemset.",
            "{banana, apple, grape, orange} must be a frequent itemset.",
            "{grape} => {banana, apple} must be a relevant rule.",
            "{banana, apple} => {orange} must be a relevant rule.",
        ]
    },
    {
        text: "Your colleague, who is new to Hadoop, approaches you with a question. They want to know how best to access their data. This colleague has previously worked extensively with SQL and databases. \nWhich query interface would you recommend?",
        options: ["Hive",
            "Pig",
            "Howl",
            "HBase",
        ]
    },
    {
        text: "What is the primary function of the NameNode in Hadoop?",
        options: ["Acts as a regulator/resolver among clients and DataNodes",
            "Runs some number of mapping tasks against its assigned data",
            "Monitors the state of each JobTracker node and signals an event if unavailable",
            "Keeps track of which MapReduce jobs have been assigned to each TaskTracker",
        ]
    },
    {
        text: "What activities occur during the discovery phase of the data analytics lifecycle?",
        options: ["Interview project sponsor and stakeholders",
            "Deploy and monitor model performance",
            "Build training and test datasets",
            "Perform ETL and data exploration",
        ]
    }
]

export default erpextra