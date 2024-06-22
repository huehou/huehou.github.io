---
title: Quantum Arithmetic Model
tags:
  - Note
  - "#QC"
date: 2023-11-28
---
Given a [[Fixed Point Arithmetic|fixed-point representation]] of a real number, the 4 arithmetic operations (addition, subtraction, multiplication, division) take constant time to perform

>[!tip]- Proof
> - Any Boolean circuit can be made reversible
> - Any reversible circuits can be made using NOT and Toffoli gates
> - We can use the quantum NOT and Toffoli gates to convert it to quantum circuits
> - Classical circuits for arithmetic operations require $\order{\mathrm{poly}{\pqty{c_1, c_2}}}$  operations
> - Quantum circuits should require $\order{\mathrm{poly}{\pqty{c_1, c_2}}}$  gates by substitution


