---
title: Local Operations of Positive Partial Transpose States
tags:
  - Note
  - QM
date: 2023-12-06
---
Consider a bipartite density matrix $\rho$ with [[Positive Partial Transpose]], then local operations on $\rho$ is still a positive partial transpose state. In other words, consider
$$
\rho_{\mathrm{out}} = {\pqty{A \otimes B}} \rho {\pqty{A^\dagger \otimes B^\dagger}} \,,
$$
where $A$ and $B$ are local operations. If $\rho$ is a PPT state, then $\rho_{\mathrm{out}}$ is also a PPT state

> [!tip]- Proof
> The partial transpose of $\rho_{\mathrm{out}}$ is 
> $$ \rho_{\mathrm{out}}^{T_B} = {\pqty{A \otimes B^*}} \rho^{T_B} {\pqty{A^\dagger \otimes B^T}} $$
> If $\rho$ is a PPT state, then $\rho^{T_B}$ is a positive semidefinite matrix, which means that 
> $$ \bra{z} \rho^{T_B} \ket{z} \geq 0 \quad  \forall \, z \,. $$
> Hence, 
> $$ \begin{align*}
\bra{z} \rho_{\mathrm{out}}^{T_B} \ket{z} ={}& \bra{z} {\pqty{A \otimes B^*}} \rho^{T_B} {\pqty{A^\dagger \otimes B^T}} \ket{z} \\
\equiv{}& \bra{z'} \rho^{T_B} \ket{z'}\\
\geq{}& 0 \quad \forall \, z\,.
\end{align*}  $$
> Therefore, local operations preserve the PPT property


