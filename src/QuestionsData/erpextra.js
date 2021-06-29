import erp1 from './images/erp_extra/1.jpg';
import erp2 from './images/erp_extra/2.jpg';
import erp3 from './images/erp_extra/3.jpg';
import erp4 from './images/erp_extra/4.jpg';
import erp5 from './images/erp_extra/5.jpg';
import erp6 from './images/erp_extra/6.jpg';
import erp7 from './images/erp_extra/7.jpg';
import erp8 from './images/erp_extra/8.jpg';
import erp9 from './images/erp_extra/9.jpg';
import erp10 from './images/erp_extra/10.jpg';
import erp11 from './images/erp_extra/11.jpg';
import erp12 from './images/erp_extra/12.jpg';
import erp13 from './images/erp_extra/13.jpg';
import erp14 from './images/erp_extra/14.jpg';
import erp15 from './images/erp_extra/15.jpg';
import erp16 from './images/erp_extra/16.jpg';
import erp17 from './images/erp_extra/17.jpg';
import erp18 from './images/erp_extra/18.jpg';
import erp19 from './images/erp_extra/19.jpg';
import erp20 from './images/erp_extra/20.jpg';
import erp21 from './images/erp_extra/21.jpg';
import erp22 from './images/erp_extra/22.jpg';
import erp23 from './images/erp_extra/23.jpg';
import erp24 from './images/erp_extra/24.jpg';
import erp25 from './images/erp_extra/25.jpg';
import erp26 from './images/erp_extra/26.jpg';
import erp27 from './images/erp_extra/27.jpg';
import erp28 from './images/erp_extra/28.jpg';
import erp29 from './images/erp_extra/29.jpg';

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
    },
    {
        text: "You are using MADlib for Linear Regression analysis. Which value does the statement return?\nSELECT (linregr(depvar, indepvar)).r2 FROM zeta1;",
        options: ["Goodness of fit",
            "Coefficients",
            "Standard error",
            "P-value"]
    },
    {
        text: "Which data asset is an example of quasi-structured data?",
        options: ["Webserver log",
            "XML data file",
            "Database table",
            "News article"]
    },
    {
        text: "What would be considered 'Big Data'?",
        options: ["Daily Log files from a web server that receives 100,000 hits per minute",
            "An OLAP Cube containing customer demographic information about 100,000,000 customers",
            "Aggregated statistical data stored in a relational database table",
            "Spreadsheets containing monthly sales data for a Global 100 corporation"]
    },
    {
        text: "A data scientist plans to classify the sentiment polarity of 10, 000 product reviews collected from\nthe Internet. What is the most appropriate model to use? Suppose labeled training data is\navailable.",
        options: ["Naïve Bayesian classifier",
            "Linear regression",
            "Logistic regression",
            "K-means clustering"]
    },
    {
        text: "In which lifecycle stage are test and training data sets created?",
        options: ["Model building",
            "Model planning",
            "Discovery",
            "Data preparation"]
    },
    {
        text: "When creating a presentation for a technical audience, what is the main objective?",
        options: ["Show how you met the project goals",
            "Show that you met the project goals",
            "Show if the model will meet the SLA",
            "Show the technique to be used in the production environment"]
    },
    {
        text: "Your company has 3 different sales teams. Each team's sales manager has developed incentive\noffers to increase the size of each sales transaction. Any sales manager whose incentive program\ncan be shown to increase the size of the average sales transaction will receive a bonus.\nData are available for the number and average sale amount for transactions offering one of the\nincentives as well as transactions offering no incentive.\nThe VP of Sales has asked you to determine analytically if any of the incentive programs has\nresulted in a demonstrable increase in the average sale amount. Which analytical technique would\nbe appropriate in this situation?",
        options: ["One-way ANOVA",
            "Multi-way ANOVA",
            "Student's t-test",
            "Wilcoxson Rank Sum Test"]
    },
    {
        text: "In data visualization, what is used to focus the audience on a key part of a chart?",
        options: ["Emphasis colors",
            "Detailed text",
            "Pastel colors",
            "A data table"]
    },
    {
        text: "Which word or phrase completes the statement? Data-ink ratio is to data visualization as\n__________ .",
        options: ["Confusion matrix is to classifier",
            "Data scientist is to big data",
            "Seasonality is to ARIMA",
            "K-means is to Naive Bayes"]
    },
    {
        text: "Consider a database with 4 transactions:\nTransaction 1: {cheese, bread, milk}\nTransaction 2: {soda, bread, milk}\nTransaction 3: {cheese, bread}\nTransaction 4: {cheese, soda, juice}\nYou decide to run the association rules algorithm where minimum support is 50%. Which rule has\na confidence at least 50%?",
        options: ["{cheese} => {bread}",
            "{juice} => {cheese}",
            "{milk} => {soda}",
            "{soda} => {milk}"]
    },
    {
        text: "You are using the Apriori algorithm to determine the likelihood that a person who owns a home\nhas a good credit score. You have determined that the confidence for the rules used in the\nalgorithm is > 75%. You calculate lift = 1.011 for the rule, 'People with good credit are\nhomeowners'. What can you determine from the lift calculation?",
        options: ["The rule is coincidental",
            "Leverage of the rules is low",
            "Support for the association is low",
            "The rule is true"]
    },
    {
        text: "Consider a database with 4 transactions:\nTransaction 1: {cheese, bread, milk}\nTransaction 2: {soda, bread, milk}\nTransaction 3: {cheese, bread}\nTransaction 4: {cheese, soda, juice}\nThe minimum support is 25%. Which rule has a confidence equal to 50%?",
        options: ["{bread} => {cheese}",
            "{bread} => {milk}",
            "{juice} => {soda}",
            "{bread,milk} => {cheese}"]
    },
    {
        text: "Under which circumstance do you need to implement N-fold cross-validation after creating a\nregression model?",
        options: ["There is not enough data to create a test set.",
            "The data is unformatted.",
            "There are missing values in the data.",
            "There are categorical variables in the model."]
    },
    {
        text: "What is an appropriate data visualization to use in a presentation for an analyst audience?",
        options: ["ROC curve",
            "Area chart",
            "Stacked bar chart",
            "Pie chart"]
    },
    {
        text: "When would you use GROUP BY ROLLUP clause in your OLAP query?",
        options: ["where all subtotals and grand totals are to be included in the output",
            "where only the subtotals are to be included in the output",
            "where only the grand totals are to be included in the output",
            "where only specific subtotals and grand totals for a combination of variables are to be included in the output"]
    },
    {
        text: "Which type of numeric value does a logistic regression model estimate?",
        options: ["Probability",
            "A p-value",
            "Any integer",
            "Any real number"]
    },
    {
        text: "The web analytics team uses Hadoop to process access logs. They now want to correlate this\ndata with structured user data residing in a production single-instance JDBC database. They\ncollaborate with the production team to import the data into Hadoop. Which tool should they use?",
        options: ["Sqoop",
            "Pig",
            "Chukwa",
            "Scribe"]
    },
    {
        text: "What does the R code\nz <- f[1:10, ]\ndo?",
        options: ["Assigns the first 10 rows of f to the vector z",
            "Assigns the 1st 10 columns of the 1st row of f to z",
            "Assigns a sequence of values from 1 to 10 to z",
            "Assigns the 1st 10 columns to z"]
    },
    {
        text: "In R, functions like plot() and hist() are known as what?",
        options: ["virtual methods",
            "generic functions",
            "virtual functions",
            "generic methods"]
    },
    {
        text: "Review the following code:\nSELECT pn, vn, sum(prc*qty)\nFROM sale\nGROUP BY CUBE(pn, vn)\nORDER BY 1, 2, 3;\nWhich combination of subtotals do you expect to be returned by the query?",
        options: ["( (pn,vn),(pn),(vn),( ) )",
            "( (pn,vn),(pn) )",
            "( (pn,vn),(pn),(vn) )",
            "(pn,vn)"]
    },
    {
        text: "In MADlib what does MAD stand for?",
        options: ["Magnetic,Agile,Deep",
            "Mathematical Algorithms for Databases",
            "Machine Learning,Algorithms for Databases",
            "Modular,Accurate,Dependable"]
    },
    {
        text: "The web analytics team uses Hadoop to process access logs. They now want to correlate this\ndata with structured user data residing in their massively parallel database. Which tool should they\nuse to export the structured data from Hadoop?",
        options: ["Sqoop",
            "Pig",
            "Chukwa",
            "Scribe"]
    },
    {
        text: "When would you prefer a Naive Bayes model to a logistic regression model for classification?",
        options: ["When you are using several categorical input variables with over 1000 possible values each.",
            "When you need to estimate the probability of an outcome,not just which class it is in.",
            "When all the input variables are numerical.",
            "When some of the input variables might be correlated."]
    },
    {
        text: "Before you build an ARMA model, how can you tell if your time series is weakly stationary?",
        options: ["There appears to be a constant variance around a constant mean.",
            "The mean of the series is close to 0.",
            "The series is normally distributed.",
            "There appears to be no apparent trend component."]
    },
    {
        text: "You have fit a decision tree classifier using 12 input variables. The resulting tree used 7 of the 12\nvariables, and is 5 levels deep. Some of the nodes contain only 3 data points. The AUC of the\nmodel is 0.85. What is your evaluation of this model?",
        options: ["The tree is probably overfit. Try fitting shallower trees and using an ensemble method.",
            "The AUC is high,and the small nodes are all very pure. This is an accurate model.",
            "The tree did not split on all the input variables. You need a larger data set to get a more accurate model.",
            "The AUC is high,so the overall model is accurate. It is not well-calibrated,because the small nodes will give poor estimates of probability."]
    },
    {
        text: "If your intention is to show trends over time, which chart type is the most appropriate way to depict\nthe data?",
        options: ["Line chart",
            "Bar chart",
            "Stacked bar chart",
            "Histogram"]
    },
    {
        text: "You are analyzing a time series and want to determine its stationarity. You also want to determine\nthe order of autoregressive models.\nHow are the autocorrelation functions used?",
        options: ["ACF as an indication of stationarity,and PACF for the correlation between Xt and Xt-k not explained by their mutual correlation with X1 through Xk-1.",
            "PACF as an indication of stationarity,and ACF for the correlation between Xt and Xt-k not explained by their mutual correlation with X1 through Xk-1.",
            "ACF as an indication of stationarity,and PACF to determine the correlation of X1 through Xk-1.",
            "PACF as an indication of stationarity,and ACF to determine the correlation of X1 through Xk-1."]
    },
    {
        text: "Which word or phrase completes the statement? A spreadsheet is to a data island as a centralized\ndatabase for reporting is to a ________?",
        options: ["Data Warehouse",
            "Data Repository",
            "Analytic Sandbox",
            "Data Mart"]
    },
    {
        text: "What is one modeling or descriptive statistical function in MADlib that is typically not provided in a\nstandard relational database?",
        options: ["Linear regression",
            "Expected value",
            "Variance",
            "Quantiles"]
    },
    {
        text: "In which phase of the data analytics lifecycle do Data Scientists spend the most time in a project?",
        options: ["Data Preparation",
            "Discovery",
            "Model Building",
            "Communicate Results"]
    },
    {
        text: "You are testing two new weight-gain formulas for puppies. The test gives the results:\nControl group: 1% weight gain\nFormula A. 3% weight gain\nFormula B. 4% weight gain\nA one-way ANOVA returns a p-value = 0.027\nWhat can you conclude?",
        options: ["Either Formula A or Formula B is effective at promoting weight gain.",
            "Formula B is more effective at promoting weight gain than Formula A.",
            "Formula A and Formula B are both effective at promoting weight gain.",
            "Formula A and Formula B are about equally effective at promoting weight gain."]
    },
    {
        text: "Data visualization is used in the final presentation of an analytics project. For what else is this\ntechnique commonly used?",
        options: ["Data exploration",
            "Descriptive statistics",
            "ETLT",
            "Model selection"]
    },
    {
        text: "Which functionality do regular expressions provide?",
        options: ["text pattern matching",
            "underflow prevention",
            "increased numerical precision",
            "decreased processing complexity"]
    },
    {
        text: "When creating a project sponsor presentation, what is the main objective?",
        options: ["Show that you met the project goals",
            "Show how you met the project goals",
            "Show how well the model will meet the SLA (service level agreement)",
            "Clearly describe the methods and techniques used"]
    },
    {
        text: "The average purchase size from your online sales site is $17, 200. The customer experience team\nbelieves a certain adjustment of the website will increase sales. A pilot study on a few hundred\ncustomers showed an increase in average purchase size of $1.47, with a significance level of\np=0.1.\nThe team runs a larger study, of a few thousand customers. The second study shows an\nincreased average purchase size of $0.74, with a significance level of 0.03. What is your\nassessment of this study?",
        options: ["The change in purchase size is not practically important,and the good p-value of the second study is probably a result of the large study size.",
            "The change in purchase size is small,but may aggregate up to a large increase in profits over the entire customer base.",
            "The difference in the change in purchase size between the two studies is troubling; The team should run another,larger study.",
            "The p-value of the second study shows a statistically significant change in purchase size. The new website is an improvement."]
    },
    {
        text: "Which word or phrase completes the statement? Business Intelligence is to monitoring trends as\nData Science is to ________ trends.",
        options: ["Predicting",
            "Discarding",
            "Driving",
            "Optimizing"]
    },
    {
        text: "Consider a scale that has five (5) values that range from “not important” to “very important”. Which\ndata classification best describes this data?",
        options: ["Ordinal",
            "Nominal",
            "Real",
            "Ratio"]
    },
    {
        text: "Which key role for a successful analytic project can provide business domain expertise with a\ndeep understanding of the data and key performance indicators?",
        options: ["Business Intelligence Analyst",
            "Project Manager",
            "Project Sponsor",
            "Business User"]
    },
    {
        text: "On analyzing your time series data you suspect that the data represented as\ny1, y2, y3, ... , yn-1, yn\nmay have a trend component that is quadratic in nature. Which pattern of data will indicate that\nthe trend in the time series data is quadratic in nature?",
        options: ["(y3-y2) – (y2-y1) = .........= (yn-yn-1)-(yn-1-yn-2)",
            "(y2-y1) = (y3-y2) = ....... = (yn-yn-1)",
            "((y2-y1) /y1 ) * 100% = .......((yn-yn-1)/yn-1) * 100%",
            "(y4-y2) – (y3-y1) = .........= (yn-yn-2)-(yn-1-yn-3)"]
    },
    {
        text: "Which analytical method is considered unsupervised?",
        options: ["K-means clustering",
            "Naïve Bayesian classifier",
            "Decision tree",
            "Linear regression"]
    },
    {
        text: "You have used k-means clustering to classify behavior of 100, 000 customers for a retail store.\nYou decide to use household income, age, gender and yearly purchase amount as measures. You\nhave chosen to use 8 clusters and notice that 2 clusters only have 3 customers assigned. What\nshould you do?",
        options: ["Decrease the number of clusters",
            "Increase the number of clusters",
            "Decrease the number of measures used",
            "Identify additional measures to add to the analysis"]
    },
    {
        text: "What does R code nv <- v[v < 1000] do?",
        options: ["Selects the values in vector v that are less than 1000 and assigns them to the vector nv",
            "Sets nv to TRUE or FALSE depending on whether all elements of vector v are less than 1000",
            "Removes elements of vector v less than 1000 and assigns the elements >= 1000 to nv",
            "Selects values of vector v less than 1000,modifies v,and makes a copy to nv"]
    },
    {
        text: "For which class of problem is MapReduce most suitable?",
        options: ["Embarrassingly parallel",
            "Minimal result data",
            "Simple marginalization tasks",
            "Non-overlapping queries"]
    },
    {
        text: "Which activity is performed in the Operationalize phase of the Data Analytics Lifecycle?",
        options: ["Define the process to maintain the model",
            "Try different analytical techniques",
            "Try different variables",
            "Transform existing variables"]
    },
    {
        text: "Since R factors are categorical variables, they are most closely related to which data classification\nlevel?",
        options: ["nominal",
            "ordinal",
            "interval",
            "ratio"]
    },
    {
        text: "In which phase of the analytic lifecycle would you expect to spend most of the project time?",
        options: ["Communicate Results",
            "Data preparation",
            "Discovery",
            "Operationalize"]
    },
    {
        text: "You are building a logistic regression model to predict whether a tax filer will be audited within the\nnext two years. Your training set population is 1000 filers. The audit rate in your training data is\n4.2%. What is the sum of the probabilities that the model assigns to all the filers in your training set\nthat have been audited?",
        options: ["42.0",
            "4.2",
            "0.42",
            "0.042"]
    },
    {
        img: erp1,
        text:"You are asked to write a report on how specific variables impact your client’s sales using a data\nset provided to you by the client. The data includes 15 variables that the client views as directly\nrelated to sales, and you are restricted to these variables only.\nAfter a preliminary analysis of the data, the following findings were made:\n1. Multicollinearity is not an issue among the variables\n2. Only three variables—A, B, and C—have significant correlation with sales\nYou build a linear regression model on the dependent variable of sales with the independent\nvariables of A, B, and C. The results of the regression are seen in the exhibit.\nYou cannot request additional datA. what is a way that you could try to increase the R2 of the\nmodel without artificially inflating it?",
        options: ["Create clusters based on the data and use them as model inputs",
            "Force all 15 variables into the model as independent variables",
            "Create interaction variables based only on variables A,B,and C",
            "Break variables A,B,and C into their own univariate models"]
    },
    {
        text: "You have two tables of customers in your database. Customers in cust_table_1 were sent an e-\nmail promotion last year, and customers in cust_table_2 received a newsletter last year.\nCustomers can only be entered in once per table. You want to create a table that includes all\ncustomers, and any of the communications they received last year. Which type of join would you\nuse for this table?",
        options: ["Full outer join",
            "Inner join",
            "Left outer join",
            "Cross join"]
    },
    {
        text: "In which lifecycle stage are initial hypotheses formed?",
        options: ["Discovery",
            "Model planning",
            "Model building",
            "Data preparation"]
    },
    {
        text: "You are given 10, 000, 000 user profile pages of an online dating site in XML files, and they are\nstored in HDFS. You are assigned to divide the users into groups based on the content of their\nprofiles. You have been instructed to try K-means clustering on this data. How should you\nproceed?",
        options: ["Run MapReduce to transform the data,and find relevant key value pairs.",
            "Divide the data into sets of 1,000 user profiles,and run K-means clustering in RHadoop iteratively.",
            "Run a Naive Bayes classification as a pre-processing step in HDFS.",
            "Partition the data by XML file size,and run K-means clustering in each partition."]
    },
    {
        text: "The Marketing department of your company wishes to track opinion on a new product that was\nrecently introduced. Marketing would like to know how many positive and negative reviews are\nappearing over a given period and potentially retrieve each review for more in-depth insight.\nThey have identified several popular product review blogs that historically have published\nthousands of user reviews of your company’s products.\nYou have been asked to provide the desired analysis. You examine the RSS feeds for each blog\nand determine which fields are relevant. You then craft a regular expression to match your new\nproduct’s name and extract the relevant text from each matching review.\nWhat is the next step you should take?",
        options: ["Convert the extracted text into a suitable document representation and index into a review corpus",
            "Use the extracted text and your regular expression to perform a sentiment analysis based on mentions of the new product",
            "Read the extracted text for each review and manually tabulate the results",
            "Group the reviews using Naïve Bayesian classification"]
    },
    {
        text: "Which word or phrase completes the statement? A Data Scientist would consider that a RDBMS is\nto a Table as R is to a ______________ .",
        options: ["Data frame",
            "List",
            "Matrix",
            "Array"]
    },
    {
        text: "Which word or phrase completes the statement? Unix is to bash as Hadoop is to:",
        options: ["Pig",
            "HDFS",
            "Sqoop",
            "NameNode"]
    },
    {
        text: "A call center for a large electronics company handles an average of 35, 000 support calls a day.\nThe head of the call center would like to optimize the staffing of the call center during the rollout of\na new product due to recent customer complaints of long wait times. You have been asked to\ncreate a model to optimize call center costs and customer wait times.\nThe goals for this project include:\n1. Relative to the release of a product, how does the call volume change over time?\n2. How to best optimize staffing based on the call volume for the newly released product, relative\nto old products.\n3. Historically, what time of day does the call center need to be most heavily staffed?\n4. Determine the frequency of calls by both product type and customer language.\nWhich goals are suitable to be completed with MapReduce?",
        options: ["Goal 2 and 4",
            "Goal 1 and 3",
            "Goals 1,2,3,4",
            "Goals 2,3,4"]
    },
    {
        text: "Consider the example of an analysis for fraud detection on credit card usage. You will need to\nensure higher-risk transactions that may indicate fraudulent credit card activity are retained in your\ndata for analysis, and not dropped as outliers during pre-processing. What will be your approach\nfor loading data into the analytical sandbox for this analysis?",
        options: ["ELT",
            "ETL",
            "EDW",
            "OLTP"]
    },
    {
        text: "Trend, seasonal, and cyclical are components of a time series. What is another component?",
        options: ["Irregular",
            "Linear",
            "Quadratic",
            "Exponential"]
    },
    {
        text: "You are studying the behavior of a population, and you are provided with multidimensional data at\nthe individual level. You have identified four specific individuals who are valuable to your study,\nand would like to find all users who are most similar to each individual. Which algorithm is the\nmost appropriate for this study?",
        options: ["K-means clustering",
            "Linear regression",
            "Association rules",
            "Decision Trees"]
    },
    {
        text: "Which R data structure allows elements to have different data types?",
        options: ["List",
            "Vector",
            "Matrix",
            "Array"]
    },
    {
        text: "Which key role for a successful analytic project can consult and advise the project team on the\nvalue of end results and how these will be used on a day-to-day basis?",
        options: ["Business User",
            "Project Manager",
            "Data Scientist",
            "Business Intelligence Analyst"]
    },
    {
        text: "A disk drive manufacturer has a defect rate of less than 1.0% with 98% confidence. A quality\nassurance team samples 1000 disk drives and finds 14 defective units. Which action should the\nteam recommend?",
        options: ["The manufacturing process should be inspected for problems.",
            "A larger sample size should be taken to determine if the plant is functioning properly f",
            "A smaller sample size should be taken to determine if the plant is functioning properly",
            "The manufacturing process is functioning properly and no further action is required."]
    },
    {
        text: "What is required in a presentation for project sponsors?",
        options: ["The 'Big Picture' takeaways for executive level stakeholders",
            "Data warehouse design changes",
            "Line by line review of the developed code",
            "Detailed statistical basis for the modeling approach used in the project"]
    },
    {
        text: "A data scientist wants to predict the probability of death from heart disease based on three risk\nfactors: age, gender, and blood cholesterol level.\nWhat is the most appropriate method for this project?",
        options: ["Logistic regression",
            "Linear regression",
            "K-means clustering",
            "Apriori algorithm"]
    },
    {
        text: "What are the characteristics of Big Data?",
        options: ["Data volume,processing complexity,and data structure variety.",
            "Data volume,business importance,and data structure variety.",
            "Data type,processing complexity,and data structure variety.",
            "Data volume,processing complexity,and business importance."]
    },
    {
        text: "You are analyzing data in order to build a classifier model. You discover non-linear data and\ndiscontinuities that will affect the model. Which analytical method would you recommend?",
        options: ["Decision Trees",
            "Logistic Regression",
            "ARIMA",
            "Linear Regression"]
    },
    {
        text: "What is an appropriate data visualization to use in a presentation for a project sponsor?",
        options: ["Bar chart",
            "Pie chart",
            "Box and Whisker plot",
            "Density plot"]
    },
    {
        text: "In a Student's t-test, what is the meaning of the p-value?",
        options: ["it is the area under the appropriate tails of the Student's distribution",
            "it is the 'power' of the Student's t-test",
            "it is the mean of the distribution for the null hypothesis",
            "it is the mean of the distribution for the alternate hypothesis"]
    },
    {
        text: "In addition to less data movement and the ability to use larger datasets in calculations, what is a\nbenefit of analytical calculations in a database?",
        options: ["quicker time to insight",
            "more efficient handling of categorical values",
            "improved connections between disparate data sources",
            "full use of data aggregation functionality"]
    },
    {
        text: "You have been assigned to do a study of the daily revenue effect of a pricing model of online\ntransactions. When have you completed the analytics lifecycle?",
        options: ["You have written documentation,and the code has been handed off to the Data Base Administrator and business operations.",
            "You have a completely developed model,and the results have shown statistically acceptable results.",
            "You have presented the results of the model to both the internal analytics team and the business owner of the project.",
            "You have a completely developed model based on both a sample of the data and the entire set of data available."]
    },
    {
        text: "Consider these itemsets:\n(hat, scarf, coat)\n(hat, scarf, coat, gloves)\n(hat, scarf, gloves)\n(hat, gloves)\n(scarf, coat, gloves)\nWhat is the confidence of the rule (gloves -> hat)?",
        options: ["75%",
            "60%",
            "66%",
            "80%"]
    },
    {
        text: "What is holdout data?",
        options: ["a subset of the provided data set selected at random and used to validate the model",
            "a subset of the provided data set selected at random and used to initially construct the model",
            "a subset of the provided data set that is removed by the data scientist because it contains data errors",
            "a subset of the provided data set that is removed by the data scientist because it contains outliers"]
    },
    {
        text: "Which characteristic applies mainly to Data Science as opposed to Business Intelligence?",
        options: ["Advanced analytical methods",
            "Robust reporting",
            "Focus on structured data",
            "Data dashboards"]
    },
    {
        text: "Which word or phrase completes the statement?\nTheater actor is to 'Artistic and Expressive' as Data Scientist is to ________________",
        options: ["'Communicative and Collaborative'",
            "'Introverted and Technical'",
            "'Logical and Steadfast'",
            "'Independent and Intelligent'"]
    },
    {
        text: "Which process in text analysis can be used to reduce dimensionality?",
        options: ["Stemming",
            "Parsing",
            "Digitizing",
            "Sorting"]
    },
    {
        text: "What is the format of the output from the Map function of MapReduce?",
        options: ["Key-value pairs",
            "Binary respresentation of keys concatenated with structured data",
            "Compressed index",
            "Unique key record and separate records of all possible values"]
    },
    {
        text: "Which data type value is used for the observed response variable in a logistic regression model?",
        options: ["A binary value",
            "Any integer",
            "Any positive real number",
            "Any real number"]
    },
    {
        text: "A data scientist is given an R data frame, “empdata”, with the columns Age, Salary, Occupation,\nEducation, and Gender. The data scientist would like to examine only the Salary and Occupation\ncolumns for ages greater than 40. Which command extracts the appropriate rows and columns\nfrom the data frame?",
        options: ["empdata[empdata$Age > 40,c('Salary','Occupation')]",
            "empdata[c('Salary','Occupation'),empdata$Age > 40]",
            "empdata[Age > 40,('Salary','Occupation')]",
            "empdata[,c('Salary','Occupation')]$Age > 40"]
    },
    {
        text: "What is required in a presentation for business analysts?",
        options: ["Operational process changes",
            "Budgetary considerations and requests",
            "Detailed statistical explanation of the applicable modeling theory",
            "The presentation author's credentials"]
    },
    {
        text: "What is LOESS used for?",
        options: ["It fits a smoothed curve to scatterplot data,to give a general sense of the data's behavior.",
            "It is a significance test for the correlation between two variables.",
            "It plots a continuous variable versus a discrete variable,to compare distributions across classes.",
            "It is run after a one-way ANOVA,to determine which population has the highest mean value."]
    },
    {
        text: "Which word or phrase completes the statement? Mahout is to Hadoop as MADlib is to\n____________ .",
        options: ["PostgreSQL",
            "R",
            "Excel",
            "SAS"]
    },
    {
        text: "In linear regression modeling, which action can be taken to improve the linearity of the relationship\nbetween the dependent and independent variables?",
        options: ["Apply a transformation to a variable",
            "Use a different statistical package",
            "Calculate the R-Squared value",
            "Change the units of measurement on the independent variable"]
    },
    {
        text: "Data visualization is used in the final presentation of an analytics project. For what else is this\ntechnique commonly used?",
        options: ["Assessing data quality",
            "Descriptive statistics",
            "ETLT",
            "Model selection"]
    },
    {
        text: "You have been assigned to do a study of the daily revenue effect of a pricing model of online\ntransactions. All the data currently available to you has been loaded into your analytics database;\nrevenue data, pricing data, and online transaction data. You find that all the data comes in\ndifferent levels of granularity. The transaction data has timestamps (day, hour, minutes, seconds),\npricing is stored at the daily level, and revenue data is only reported monthly. What is your next\nstep?",
        options: ["Report back to the business owner that the current data model does not support the business question.",
            "Interpolate a daily model for revenue from the monthly revenue data.",
            "Aggregate all data to the monthly level in order to create a monthly revenue model.",
            "Disregard revenue as a driver in the pricing model,and create a daily model based on pricing and transactions only."]
    },
    {
        text: "Which SQL OLAP extension provides all possible grouping combinations?",
        options: ["CUBE",
            "ROLLUP",
            "UNION ALL",
            "CROSS JOIN"]
    },
    {
        text: "What is the primary bottleneck in text classification?",
        options: ["The availablilty of tagged training data.",
            "The ability to parse unstructured text data.",
            "The high dimensionality of text data.",
            "The fact that text corpora are dynamic."]
    },
    {
        text: "Which characteristic applies only to Business Intelligence as opposed to Data Science?",
        options: ["Uses only structured data",
            "Supports solving “what if” scenarios",
            "Uses large data sets",
            "Uses predictive modeling techniques"]
    },
    {
        text: "You have been assigned to run a linear regression model for each of 5, 000 distinct districts, and\nall the data is currently stored in a PostgreSQL database. Which tool/library would you use to\nproduce these models with the least effort?",
        options: ["MADlib",
            "Mahout",
            "R",
            "HBase"]
    },
    {
        text: "Your customer provided you with 2, 000 unlabeled records and asked you to separate them into\nthree groups. What is the correct analytical method to use?",
        options: ["K-means clustering",
            "Linear regression",
            "Naive Bayesian classification",
            "Logistic regression"]
    },
    {
        text: "You are performing a market basket analysis using the Apriori algorithm. Which measure is a ratio\ndescribing the how many more times two items are present together than would be expected if\nthose two items are statistically independent?",
        options: ["Lift",
            "Leverage",
            "Support",
            "Confidence"]
    },
    {
        text: "In which lifecycle stage are appropriate analytical techniques determined?",
        options: ["Model planning",
            "Model building",
            "Data preparation",
            "Discovery"]
    },
    {
        text: "What is Hadoop?",
        options: ["Java classes for HDFS types and MapReduce job management and HDFS",
            "Java classes for HDFS types and MapReduce job management and the MapReduce paradigm",
            "MapReduce paradigm and HDFS",
            "MapReduce paradigm and massive unstructured data storage on commodity hardware"]
    },
    {
        text: "You are using k-means clustering to classify heart patients for a hospital. You have chosen Patient\nSex, Height, Weight, Age and Income as measures and have used 3 clusters. When you create a\npair-wise plot of the clusters, you notice that there is significant overlap between the clusters.\nWhat should you do?",
        options: ["Decrease the number of clusters",
            "Remove one of the measures",
            "Identify additional measures to add to the analysis",
            "Increase the number of clusters"]
    },
    {
        text: "You are provided four different datasets. Initial analysis on these datasets show that they have\nidentical mean, variance and correlation values. What should your next step in the analysis be?",
        options: ["Visualize the data to further explore the characteristics of each data set",
            "Select one of the four datasets and begin planning and building a model",
            "Combine the data from all four of the datasets and begin planning and bulding a model",
            "Recalculate the descriptive statistics since they are unlikely to be identical for each dataset"]
    },
    {
        text: "You are asked to create a model to predict the total number of monthly subscribers for a specific\nmagazine. You are provided with 1 year's worth of subscription and payment data, user\ndemographic data, and 10 years worth of content of the magazine (articles and pictures). Which\nalgorithm is the most appropriate for building a predictive model for subscribers?",
        options: ["Linear regression",
            "Logistic regression",
            "Decision trees",
            "TF-IDF"]
    },
    {
        text: "Which word or phrase completes the statement? Structured data is to OLAP data as quasi-\nstructured data is to____",
        options: ["Clickstream data",
            "XML data",
            "Text documents",
            "Image files"]
    },
    {
        text: "What describes a true property of Logistic Regression method?",
        options: ["It is robust with redundant variables and correlated variables.",
            "It handles missing values well.",
            "It works well with discrete variables that have many distinct values.",
            "It works well with variables that affect the outcome in a discontinuous way."]
    },
    {
        text: "You have been assigned to do a study of the daily revenue effect of a pricing model of online\ntransactions. You have tested all the theoretical models in the previous model planning stage, and\nall tests have yielded statistically insignificant results. What is your next step?",
        options: ["Report that the results are insignificant,and reevaluate the original business question.",
            "Run all the models again against a larger sample,leveraging more historical data.",
            "Move forward on the model with the highest significance scores relative to the others.",
            "Modify samples used by the models and iterate until a significant result occurs."]
    },
    {
        text: "A data scientist is asked to implement an article recommendation feature for an on-line magazine.\nThe magazine does not want to use client tracking technologies such as cookies or reading\nhistory. Therefore, only the style and subject matter of the current article is available for making\nrecommendations. All of the magazine's articles are stored in a database in a format suitable for\nanalytics.\nWhich method should the data scientist try first?",
        options: ["K Means Clustering",
            "Naive Bayesian",
            "Logistic Regression",
            "Association Rules"]
    },
    {
        text: "How are window functions different from regular aggregate functions?",
        options: ["Rows retain their separate identities and the window function can access more than the current row.",
            "Rows are grouped into an output row and the window function can access more than the current row.",
            "Rows retain their separate identities and the window function can only access the current row.",
            "Rows are grouped into an output row and the window function can only access the current row"]
    },
    {
        text: "Consider these itemsets:\n(hat, scarf, coat)\n(hat, scarf, coat, gloves)\n(hat, scarf, gloves)\n(hat, gloves)\n(scarf, coat, gloves)\nWhat is the confidence of the rule (hat, scarf) -> gloves?",
        options: ["66%",
            "40%",
            "50%",
            "60%"]
    },
    {
        text: "In the MapReduce framework, what is the purpose of the Map Function?",
        options: ["It processes the input and generates key-value pairs",
            "It collects the output of the Reduce function",
            "It sorts the results of the Reduce function",
            "It breaks the input into smaller components and distributes to other nodes in the cluster"]
    },
    {
        text: "You have completed your model and are handing it off to be deployed in production. What should\nyou deliver to the production team, along with your commented code?",
        options: ["The production team needs to understand how your model will interact with the processes they already support. Give them documentation on expected model inputs and outputs, and guidance on error-handling.",
            "The production team are technical,and they need to understand how the processes that they support work,so give them the same presentation that you prepared for the analysts.",
            "The production team supports the processes that run the organization,and they need context to understand how your model interacts with the processes they already support. Give them the same presentation that you prepared for the project sponsor.",
            "The production team supports the processes that run the organization,and they need context to understand how your model interacts with the processes they already support. Give them the executive summary."]
    },
    {
        text: "While having a discussion with your colleague, this person mentions that they want to perform K-\nmeans clustering on text file data stored in HDFS.\nWhich tool would you recommend to this colleague?",
        options: ["Mahout",
            "HBase",
            "Scribe",
            "Sqoop"]
    },
    {
        text: "Which method is used to solve for coefficients b0, b1, .., bn in your linear regression model :\nY = b0 + b1x1+b2x2+....+bnxn",
        options: ["Ordinary Least squares",
            "Integer programming",
            "Apriori Algorithm",
            "Ridge and Lasso"]
    },
    {
        text: "What describes a true limitation of Logistic Regression method?",
        options: ["It does not handle missing values well.",
            "It does not handle redundant variables well.",
            "It does not handle correlated variables well.",
            "It does not have explanatory values."]
    },
    {
        text: "You submit a MapReduce job to a Hadoop cluster and notice that although the job was\nsuccessfully submitted, it is not completing. What should you do?",
        options: ["Ensure that the TaskTracker is running.",
            "Ensure that the JobTracker is running",
            "Ensure that the NameNode is running",
            "Ensure that a DataNode is running"]
    },
    {
        text: "A disk drive manufacturer has a defect rate of less than 1.5% with 98% confidence. A quality\nassurance team samples 1000 disk drives and finds 14 defective units. Which action should the\nteam recommend?",
        options: ["The manufacturing process is functioning properly and no further action is required",
            "A larger sample size should be taken to determine if the plant is operating correctly",
            "A smaller sample size should be taken to determine if the plant is operating correctly",
            "There is a flaw in the quality assurance process and the sample should be repeated"]
    },
    {
        text: "What is a core deliverable at the end of the analytic project?",
        options: ["A presentation for project sponsors",
            "A whitepaper describing the project and the implementation",
            "An implemented database design",
            "The training materials"]
    },
    {
        text: "You have been assigned to run a logistic regression model for each of 100 countries, and all the\ndata is currently stored in a PostgreSQL database. Which tool/library would you use to produce\nthese models with the least effort?",
        options: ["MADlib",
            "Mahout",
            "RStudio",
            "HBase"]
    },
    {
        text: "Your organization has a website where visitors randomly receive one of two coupons. It is also\npossible that visitors to the website will not receive a coupon. You have been asked to determine if\noffering a coupon to visitors to your website has any impact on their purchase decision.\nWhich analysis method should you use?",
        options: ["One-way ANOVA",
            "Association rules",
            "Student T-test",
            "K-means clustering"]
    },
    {
        text: "Imagine you are trying to hire a Data Scientist for your team. In addition to technical ability and\nquantitative background, which additional essential trait would you look for in people applying for\nthis position?",
        options: ["Communication skill",
            "Scientific background",
            "Domain expertise",
            "Well Organized"]
    },
    {
        text: "What describes the use of UNION clause in a SQL statement?",
        options: ["Operates on queries and potentially increases the number of rows",
            "Operates on queries and potentially decreases the number of rows",
            "Operates on tables and potentially decreases the number of columns",
            "Operates on both tables and queries and potentially increases both the number of rows and columns"]
    },
    {
        text: "You have run the association rules algorithm on your data set, and the two rules {banana, apple}\n=> {grape} and {apple, orange}=> {grape} have been found to be relevant. What else must be\ntrue?",
        options: ["{grape,apple,orange} must be a frequent itemset.",
            "{banana,apple,grape,orange} must be a frequent itemset.",
            "{grape} => {banana,apple} must be a relevant rule.",
            "{banana,apple} => {orange} must be a relevant rule."]
    },
    {
        text: "When would you use a Wilcoxson Rank Sum test?",
        options: ["When you cannot make an assumption about the distribution of the populations",
            "When the data can easily be sorted",
            "When the populations represent the sums of other values",
            "When the data cannot easily be sorted"]
    },
    {
        text: "In the MapReduce framework, what is the purpose of the Reduce function?",
        options: ["It aggregates the results of the Map function and generates processed output",
            "It distributes the input to multiple nodes for processing",
            "It writes the output of the Map function to storage",
            "It breaks the input into smaller components and distributes to other nodes in the cluster"]
    },
    {
        text: "Which of the following is an example of quasi-structured data?",
        options: ["Clickstream data",
            "OLAP",
            "OLTP",
            "Customer record table",]
    },
    {
        text: "A Data Scientist is assigned to build a model from a reporting data warehouse. The warehouse\ncontains data collected from many sources and transformed through a complex, multi-stage ETL\nprocess. What is a concern the data scientist should have about the data?",
        options: ["It is too processed",
            "It is not structured",
            "It is not normalized",
            "It is too centralized"]
    },
    {
        text: "Which word or phrase completes the statement? Emphasis color is to standard color as _______ .",
        options: ["Main message is to context",
            "Main message is to key findings",
            "Frequent item set is to item",
            "Pie chart is to proportions"]
    },
    {
        text: "Which data asset is an example of semi-structured data?",
        options: ["XML data file",
            "Database table",
            "Webserver log",
            "News article"]
    },
    {
        text: "In linear regression, what indicates that an estimated coefficient is significantly different than zero?",
        options: ["A small p-value",
            "R-squared near 1",
            "R-squared near 0",
            "The estimated coefficient is greater than 3"]
    },
    {
        text: "Which graphical representation shows the distribution and multiple summary statistics of a\ncontinuous variable for each value of a corresponding discrete variable?",
        options: ["box and whisker plot",
            "dotplot",
            "scatterplot",
            "binplot"]
    },
    {
        text: "Assume that you have a data frame in R. Which function would you use to display descriptive\nstatistics about this variable?",
        options: ["summary",
            "str",
            "attributes",
            "levels"]
    },
    {
        text: "What is the mandatory Clause that must be included when using Window functions?",
        options: ["PARTITION BY",
            "RANK",
            "OVER",
            "RANK BY"]
    },
    {
        text: "What is the purpose of the process step 'parsing' in text analysis?",
        options: ["imposes a structure on the unstructured/semi-structured text for downstream analysis",
            "performs the search and/or retrieval in finding a specific topic or an entity in a document",
            "executes the clustering and classification to organize the contents",
            "computes the TF-IDF values for all keywords and indices"]
    },
    {
        text: "Which word or phrase completes the statement? A data warehouse is to a centralized database\nfor reporting as an analytic sandbox is to a _______?",
        options: ["Collection of data assets for modeling",
            "Collection of low-volume databases",
            "Centralized database of KPIs",
            "Collection of data assets for ETL"]
    },
    {
        text: "You do a Student’s t-test to compare the average test scores of sample groups from populations A\nand B. Group A averaged 10 points higher than group B. You find that this difference is significant,\nwith a p-value of 0.03. What does that mean?",
        options: ["There is a 3% chance that you have identified a difference between the populations when in reality there is none.",
            "The difference in scores between a sample from population A and a sample from population B will tend to be within 3% of 10 points.",
            "There is a 3% chance that a sample group from population A will score 10 points higher that a sample group from population B.",
            "There is a 97% chance that a sample group from population A will score 10 points higher that a sample group from population B."]
    },
    {
        text: "Which word or phrase completes the statement?\nBusiness Intelligence is to ad-hoc reporting and dashboards as Data Science is to\n______________ .",
        options: ["Optimization and Predictive Modeling",
            "Alerts and Queries",
            "Structured Data and Data Sources",
            "Sales and profit reporting"]
    },
    {
        text: "What is a property of window functions in SQL commands?",
        options: ["They can be used to calculate moving averages over various intervals.",
            "They group rows into a single output row.",
            "They can be used between the keywords FROM and WHERE in a SELECT command.",
            "They don't require ordering of data within a window."]
    },
    {
        text: "You are attempting to find the Euclidean distance between two centroids:\nCentroid A's coordinates: (X = 2, Y = 4)\nCentroid B's coordinates (X = 8, Y = 10)\nWhich formula finds the correct Euclidean distance?",
        options: ["SQRT((2-8)2+(4-10)2) or 8.49",
            "SQRT(((2-8) x 2) + ((4-10) x 2)) or 12.17",
            "((2-8)2+(4-10)2) or 72",
            "((2-8) x 2 + (4-10) x 2) or 148"]
    },
    {
        text: "In data visualization, which type of chart is recommended to represent frequency data?",
        options: ["Histogram",
            "Line chart",
            "Q-Q chart",
            "Scatterplot"]
    },
    {
        text: "Which activity might be performed in the Operationalize phase of the Data Analytics Lifecycle?",
        options: ["Run a pilot",
            "Try different analytical techniques",
            "Try different variables",
            "Transform existing variables"]
    },
    {
        img: erp2,
        text:"You are asked to write a report on how specific variables impact your client’s sales using a data\nset provided to you by the client. The data includes 15 variables that the client views as directly\nrelated to sales, and you are restricted to these variables only.\nAfter a preliminary analysis of the data, the following findings were made:\n1. Multicollinearity is not an issue among the variables\n2. Only three variables—A, B, and C—have significant correlation with sales\nYou build a linear regression model on the dependent variable of sales with the independent\nvariables of A, B, and C. The results of the regression are seen in the exhibit.\nWhich interpretation is supported by the analysis?",
        options: ["Variables A,B,and C are significantly impacting sales,but are not effectively estimating sales",
            "Variables A,B,and C are significantly impacting sales and are effectively estimating sales",
            "Due to the R2 of 0.10,the model is not valid – the linear regression should be re-run with all 15 variables forced into the model to increase the R2",
            "Due to the R2 of 0.10,the model is not valid – a different analytical model should be attempted"]
    },
    {
        img: erp3,
        text:"In the Exhibit. For effective visualization, what is the chart's primary flaw?",
        options: ["The use of 3 dimensions.",
            "The slanting of axis labels.",
            "The location of the legend.",
            "The order of the columns."]
    },
    {
        img: erp4,
        text:"You have plotted the distribution of savings account sizes for your bank. How would you proceed,\nbased on this distribution?",
        options: ["The data is extremely skewed. Replot the data on a logarithmic scale to get a better sense of it.",
            "The data is extremely skewed,but looks bimodal; replot the data in the range 2,500-10,000 to be sure.",
            "The accounts of size greater than 2500 are rare,and probably outliers. Eliminate them from your future analysis.",
            "The data is extremely skewed. Split your analysis into two cohorts: accounts less than 2500,and accounts greater than 2500"]
    },
    {
        img: erp5,
        text:"In the exhibit, a correlogram is provided based on an autocorrelation analysis of a sample dataset.\nWhat can you conclude based only on this exhibit?",
        options: ["There appears to be no structure left to model in the data",
            "There appears to be a seasonal component in the data",
            "Lag 1 has a significant autocorrelation",
            "There appears to be a cyclical component in the data"]
    },
    {
        img: erp6,
        text:"In the exhibit, the x-axis represents the derived probability of a borrower defaulting on a loan. Also\nin the exhibit, the pink represents borrowers that are known to have not defaulted on their loan,\nand the blue represents borrowers that are known to have defaulted on their loan.\nWhich analytical method could produce the probabilities needed to build this exhibit?",
        options: ["Logistic Regression",
            "Linear Regression",
            "Discriminant Analysis",
            "Association Rules"]
    },
    {
        img: erp7,
        text:"You have created a density plot of purchase amounts from a retail website as shown. What should\nyou do next?",
        options: ["Recreate the density plot using a log normal distribution of the purchase amount data",
            "Use the rug() function to add elements to the plot",
            "Recreate the plot using the barplot() function",
            "Reduce the sample size of the purchase amount data used to create the plot"]
    },
    {
        img: erp8,
        text:"You are building a decision tree. In this exhibit, four variables are listed with their respective values\nof info-gain.\nBased on this information, on which attribute would you expect the next split to be in the decision\ntree?",
        options: ["Credit Score",
            "Age",
            "Income",
            "Gender"]
    },
    {
        img: erp9,
        text:"In the Exhibit, the table shows the values for the input Boolean attributes 'A', 'B', and 'C'. It also\nshows the values for the output attribute 'class'. Which decision tree is valid for the data?",
        options: ["Tree B",
            "Tree A",
            "Tree C",
            "Tree D"]
    },
    {
        img: erp10,
        text:"In the Exhibit, the table shows the values for the input Boolean attributes 'A', 'B', and 'C'. It also\nshows the values for the output attribute 'class'. Which decision tree is valid for the data?",
        options: ["Tree B",
            "Tree A",
            "Tree C",
            "Tree D"]
    },
    {
        img: erp11,
        text:"You are assigned to do an end of the year sales analysis of 1, 000 different products, based on\nthe transaction table. Which column in the end of year report requires the use of a window\nfunction?",
        options: ["Total Sales to Date",
            "Daily Sales",
            "Average Daily Price",
            "Maximum Price"]
    },
    {
        img: erp12,
        text:"You are working on creating an OLAP query that outputs several rows of with summary rows of\nsubtotals and grand totals in addition to regular rows that may contain NULL as shown in the\nexhibit. Which function can you use in your query to distinguish the row from a regular row to a\nsubtotal row?",
        options: ["GROUPING",
            "RANK",
            "GROUP_ID",
            "ROLLUP"]
    },
    {
        img: erp13,
        text:"After analyzing a dataset, you report findings to your team:\n1. Variables A and C are significantly and positively impacting the dependent variable.\n2. Variable B is significantly and negatively impacting the dependent variable.\n3. Variable D is not significantly impacting the dependent variable.\nAfter seeing your findings, the majority of your team agreed that variable B should be positively\nimpacting the dependent variable.\nWhat is a possible reason the coefficient for variable B was negative and not positive?",
        options: ["Variable B is interacting with another variable due to correlated inputs",
            "Variable B needs a quadratic transformation due to its relationship to the dependent variable",
            "The information gain from variable B is already provided by another variable",
            "Variable B needs a logarithmic transformation due to its relationship to the dependent variable"]
    },
    {
        img: erp14,
        text:"You have run a linear regression model against your data, and have plotted true outcome versus\npredicted outcome. The R-squared of your model is 0.75. What is your assessment of the model?",
        options: ["The R-squared may be biased upwards by the extreme-valued outcomes. Remove them and refit to get a better idea of the model's quality over typical data.",
            "The R-squared is good. The model should perform well.",
            "The extreme-valued outliers may negatively affect the model's performance. Remove them to see if the R-squared improves over typical data.",
            "The observations seem to come from two different populations,but this model fits them both equally well."]
    },
    {
        img: erp15,
        text:"You are using K-means clustering to classify customer behavior for a large retailer. You need to\ndetermine the optimum number of customer groups. You plot the within-sum-of-squares (wss)\ndata as shown in the exhibit. How many customer groups should you specify?",
        options: ["4",
            "3",
            "2",
            "8"]
    },
    {
        img: erp16,
        text:"You are given a list of pre-defined association\nrules:\nA) RENTER => BAD CREDIT\nB) RENTER => GOOD CREDIT\nC) HOME OWNER => BAD CREDIT\nD) HOME OWNER => GOOD CREDIT\nE) FREE HOUSING => BAD CREDIT\nF) FREE HOUSING => GOOD CREDIT\nFor your next analysis, you must limit your dataset based on rules with confidence greater than\n60%.\nWhich of the rules will be kept in the analysis?",
        options: ["Rules B and D",
            "Rules A and F",
            "Rules C and E",
            "Rules D and E"]
    },
    {
        img: erp17,
        text:"You are using k-means clustering to discover groupings within a data set. You plot within-sum-of-\nsquares (wss) of multiple cluster sizes. Based on the exhibit, how many clusters should you use in\nyour analysis?",
        options: ["4",
            "2",
            "8",
            "10"]
    },
    {
        img: erp18,
        text:"Consider the training data set shown in the exhibit. What are the classification (Y = 0 or 1) and the\nprobability of the classification for the tupleX(0, 0, 1) using Naive Bayesian classifier?",
        options: ["Classification Y = 1,Probability = 4/54",
            "Classification Y = 0,Probability = 1/54",
            "Classification Y = 1,Probability = 1/54",
            "Classification Y = 0,Probability = 4/54"]
    },
    {
        img: erp19,
        text:"In the exhibit, a correlogram is provided based on an autocorrelation analysis of a sample dataset.\nWhat can you conclude from only this exhibit?",
        options: ["There is significant autocorrelation through lag 3",
            "There is no structure left to model in the data",
            "Lag 7 has a significant negative autocorrelation",
            "Differencing is required before proceeding with any analysis"]
    },
    {
        img: erp20,
        text:"Which type of data issue would you suspect based on the exhibit?",
        options: ["'Saturated' data,indicating potential issues with data definitions",
            "Incomplete data,indicating potential issues with data transmission",
            "Mis-scaled data,indicating potential issues with data entry",
            "The exhibit does not raise any obvious concerns with the data."]
    },
    {
        img: erp21,
        text:"An analyst is searching a corpus of documents\nfor the topic 'solid state disk'. In the Exhibit, Table A provides the inverse document frequency for\neach term across the corpus. Table B provides each term's frequency in four documents selected\nfrom corpus. Which of the four documents is most relevant to the analyst's search?",
        options: ["Document C",
            "Document A",
            "Document B",
            "Document D"]
    },
    {
        img: erp22,
        text:"What provides the decision tree for predicting whether or not someone is a good or bad credit risk.\nWhat would be the assigned probability, p(good), of a single male with no known savings?",
        options: ["0.83",
            "0",
            "0.498",
            "0.6"]
    },
    {
        img: erp23,
        text:"The exhibit shows four graphs labeled as Fig A thorough Fig D. Which figure represents the\nentropy function relative to a Boolean classification and is represented by the formula shown in\nExhibit?",
        options: ["Fig-A",
            "Fig-B",
            "Fig-C",
            "Fig-D"]
    },
    {
        img: erp24,
        text:"You ran a linear regression, and the final output is seen in the exhibit.\nBased only on the information in the exhibit and an acceptable confidence level of 95%, how\nwould you interpret the interaction of variable D with the dependent variable?",
        options: ["In this model,Variable D is not significantly interacting with the dependent variable",
            "For every 1 unit increase in variable D,holding all other variables constant,we can expect the dependent variable to increase by 10.23 units",
            "For every 1 unit increase in variable D,holding all other variables constant,we can expect the dependent variable to be multiplied by 10.23 units",
            "Variable D is more significant than variables A,B,and C."]
    },
    {
        img: erp25,
        text:"The graph represents an ROC space with four classifiers labelled A through D. Which point in the\ngraph represents a perfect classification?",
        options: ["S",
            "P",
            "Q",
            "R"]
    },
    {
        img: erp26,
        text:"Consider the training data set shown in the exhibit. What are the classification (Y = 0 or 1) and the\nprobability of the classification for the tuple\nX(1, 0, 0)\nusing Naive Bayesian classifier?",
        options: ["Classification Y = 0,Probability = 4/54",
            "Classification Y = 1,Probability = 4/54",
            "Classification Y = 0,Probability = 1/54",
            "Classification Y = 1,Probability = 1/54"]
    },
    {
        img: erp27,
        text:"You have scored your Naive bayesian classifier model on a hold out test data for cross validation\nand determined the way the samples scored and tabluated them as shown in the exhibit.\nWhat are the Precision and Recall rate of the model?",
        options: ["Precision = 262/277; Recall = 262/288",
            "Precision =262/288; Recall = 262/277",
            "Precision = 277/262; Recall = 288/262",
            "Precision = 288/262; Recall = 277/262"]
    },
    {
        img: erp28,
        text:"An analyst is searching a corpus of documents\nfor the topic 'solid state disk'. In the Exhibit, Table A provides the inverse document frequency for\neach term across the corpus. Table B provides each term's frequency in four documents selected\nfrom corpus. Which of the four documents is most relevant to the analyst's search?",
        options: ["Document B",
            "Document A",
            "Document C",
            "Document D"]
    },
    {
        img: erp29,
        text:"You are going into a meeting where you know\nyour manager will have a question on your dataset -- specifically relating to customers that are\nclassified as renters with good credit status.\nIn order to prepare for the meeting, you create a rule: RENTER => GOOD CREDIT. What is the\nconfidence of the rule?",
        options: ["63%",
            "41%",
            "18%",
            "73%"]
    },
]

export default erpextra