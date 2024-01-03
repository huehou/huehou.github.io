---
title: Quantum Random Access Gate
tags:
  - Note
  - QC
date: 2023-12-18
---
A QRAG consists of memory $M$ that contains the information of interest, address $A$ that tells us where the memories are located, and target $T$ that is the place we want to copy our information. A call to QRAG performs the mapping
$$
\ket{i}_A \ket{b}_T \ket{x_0, \dots, x_i, \dots, x_{n-1}}_M \mapsto \ket{i}_A \ket{x_i}_T \ket{x_0, \dots, b, \dots x_{n-1}}_M \,,
$$
where $\ket{x_0, \dots, x_{n-1}}$ is the $n$-qubit memory cells, $\ket{i}_A$ tells us to work on the $i$th memory cell, $\ket{b}_T$ is the target cell, and $b$ is the initial binary value ${\Bqty{0,1}}$ value chosen for the target. In other words, the $i$th memory cell is [[SWAP Gate|swapped]] with the target cell. 