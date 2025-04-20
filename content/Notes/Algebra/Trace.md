---
title: Properties of Trace
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
### Cyclic Property
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
> Diagonalise $A$ using unitary matrices, and by cyclic property ![[Trace#^7524c4|^7524c4]] the unitary matrices will combine into a unit matrix $\um$, and we are left with just the sum of the eigenvalues. 

