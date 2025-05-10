---
title: Trace
tags:
  - Note
  - algebra
date: 2025-04-20
---
Trace is defined by the sum of diagonal entries of a matrix
$$
\Tr {\Bqty{A}} = \sum_{i} A_{ii} \,.
$$
## Properties
### Cyclic Property [^1] 
$$
\Tr {\Bqty{AB}} = \Tr {\Bqty{BA}}
$$

^7524c4

> [!hint]- Proof
> Write the equation in index form an notice that the components are interchangeable

### Sum of Eigenvalues
If the matrix $A$ has eigenvalues $\lambda_i$, then 
$$
\Tr A = \sum_i \lambda_i \,.
$$
> [!hint]- Proof
> Diagonalise $A$ using unitary matrices, and by [[Trace#^7524c4|cyclic property]] 
>  $$
> \Tr \Bqty{AB} = \Tr \Bqty{BA} \,,
> $$ 
> the unitary matrices will combine into a unit matrix $\um$, and we are left with just the sum of the eigenvalues. 


### Invariance under Similarity Transformation
Suppose we have a change of basis using similarity transformation
$$
A' = U^{-1} A U \,.
$$
Then, the trace remains unchanged
$$
\Tr {\Bqty{A'}} = \Tr {\Bqty{A}} \,.
$$

> [!hint]- Proof
> Use the [[Trace#^7524c4|cyclic property of trace]] so that
> $$
> \Tr {\Bqty{A'}} = \Tr {\Bqty{U^{-1} A U}} = \Tr {\Bqty{A U U^{-1}}} = \Tr {\Bqty{A}} \,.
> $$


[^1]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.3, 4. 
[^2]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.5, 11. 