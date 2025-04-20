---
title: Hermitian
tags:
  - Note
  - algebra
date: 2025-04-20
---
A Hermitian adjoint defined by 
$$
A^\dagger \equiv A_{ji}^* = {\pqty{A^T}}^* = {\pqty{A^*}}^T \,,
$$
where $A^T$ is the transpose of a matrix. A matrix is Hermitian if 
$$
A^\dagger = A \,.
$$

## Properties
### Connection to Symmetric Matrices
A real Hermitian matrix is a symmetric matrix
> [!hint]- Proof
> Use the definition of symmetric matrix $$
> A^T = A \,.
> $$

### Real Inner Product
If $A$ is Hermitian, then
$$
\bra{v} A \ket{v} \in \mathbb{R} \, \forall v \,. 
$$
> [!hint]- Proof
> $$
> \bra{v} A \ket{v}^\dagger = \bra{v} A^\dagger \ket{v} = \bra{v} A \ket{v} \,.
