---
title: Amplitude Encoding
tags:
  - Note
  - QC
date: 2023-11-28
---
We can store the values of vectors and matrices in the amplitudes of a quantum state. For example, for a vector $\vb{x}$, its corresponding amplitude encoding is
$$
\ket{\vb{x}} = \frac{1}{\norm{\vb{x}}} \sum_{i} x_i \ket{i}\,, 
$$
where we notice that $n$ qubits encode $2^n$ values in the vector $\vb{x}$.  For a matrix $X$, its corresponding amplitude encoding is
$$
\ket{X} = \frac{1}{\sqrt{\ds \sum_{ij} \norm{X_{ij}}^2}} \sum_{ij} X_{ij} \ket{i} \ket{j} \,.
$$
>[!info]- 
>Note that the vector and matrix are normalised, and the amplitudes are not stored in the machine

