---
title: Quantum Processing Unit
tags:
  - Note
  - QC
date: 2023-12-18
---
A quantum processing unit is made up of $m$ qubits, which consists of 
- $m_I$ qubits that function as the input register $I$ 
- The remaining $m - m_I$ qubits that function as workspace $W$
- 2-qubit gates that form the building blocks of $m \times m$ operations $C$ on the $m$ qubits 

An input to a QPU is made up of the initial state $\ket{\psi_I}$ of the input register and a sequence of instructions $C_1, \dots, C_t$, where 
$$
\ket{\psi_t}\ket{\phi'}_W = C_t \ket{\psi_{t-1}}\ket{\phi}_W \,,
$$
where the operation $C_t$ acts on all $m$ qubits 
