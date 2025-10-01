---
title: "Resources for learning data-processing systems"
tags: ["data", "English"]
slug: "/data-processing-systems"
---

My background as a backend engineer is working on distributed systems for data processing. I started working with large amounts of data for long-term financial projections as an actuarial intern at an insurance company, then traveled to Wall Street to work on similar batch-processing systems but for daily projections. Finally, I ended up at Pinterest working on streaming systems.

For those looking to get started, I'm keeping an in-progress list of resources for learning how to design large-scale systems here.

## Languages

Basic level of SQL, and either Python or Java is sufficient.

I found that my college computer science classes helped with proficiency in Java, but it took some industry work to start writing production-quality Python code. Every project can use a different DBMS, but knowing one RDBMS (e.g., MySQL, Microsoft SQL Server, Azure SQL Database) makes it easy to adapt to others. The most common streaming technologies to build data processing pipelines (e.g., Apache Flink, Apache Spark) use SQL-esque, declarative syntax.

## Books

For those who want a beginner-friendly introduction for foundation:

- Designing Data-intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems, by **Kleppmann**

- Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing, by **Akidau, Tyler and Chernyak, Slava and Lax, Reuven**

## Articles and Documentation

There are technologies come up a lot in conversation, endless optimizations, and custom architectures to support specific use cases.

- [Kafka](https://medium.com/@akmuthumala/introduction-to-apache-kafka-a-hands-on-guide-with-docker-bc65ae1009e5) and producer-consumer architectures. Commonly used to move data in large event-driven, real-time systems.

- [Flink](https://flink.apache.org/) for stream processing.

- [Spark](https://spark.apache.org/) for batch processing.

- If possible, proficiency in Excel and/or Google Sheets and their associated scripting language (Visual Basics for Applications and AppScript) comes in handy for sanity checks.