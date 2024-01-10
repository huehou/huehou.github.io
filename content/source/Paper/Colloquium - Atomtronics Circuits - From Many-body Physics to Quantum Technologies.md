---
title: "Colloquium: Atomtronics Circuits: From Many-body Physics to Quantum Technologies"
tags:
  - paper
date: 2023-12-18
reference: L. Amico, D. Anderson, M. Boshier, J.-P. Brantut, L.-C. Kwek, A. Minguzzi, W. von Klitzing. Rev. Mod. Phys. 94, 041001 (2022).
---

> [!info]- Reference
> **Author:** L. Amico, D. Anderson, M. Boshier, J.-P. Brantut, L.-C. Kwek, A. Minguzzi, W. von Klitzing<br> 
> **Title:** *Colloquium*: Atomtronics Circuits: From Many-body Physics to Quantum Technologies<br>
> **Journal:** Rev. Mod. Phys.<br>
> **Volume:** 94<br>
> **Page:** 041001<br>
> **Year:** 2022<br>
> **Link:** [paper](https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.94.041001), [arXiv](https://arxiv.org/abs/2107.08561) 

## Full Notes
### I Introduction
- Atomtronics: Using cold atoms as matter waves to build circuits
	- High flexibility and control 
	- Can be used as cold-atom quantum simulators 
	- Analogues of electronics or quantum electronic components
		- AQUIDS as an example
		- Can build components beyond analogues of known electronic components 
	- Applications in quantum sensing 
		- Build interferometers sensitive to inertial forces and electromagnetic fields 
### II Traps and Guides
#### A. Optical potentials
- The potentials can have any shape 
	- Done using electric dipole interaction between the atoms and lasers
##### 1. Static laser beams
- Usually cylindrically symmetric 
##### 2. Time-averaged optical potentials
- The "painted potential" approach allows flexible choice of 2D potentials
- Limitations
	- Painting must be fast enough, limiting the trapping frequencies 
##### 3. Spatial light modulators and digital micromirror devices 
- SLM usually uses liquid crystal modulators to create holograms of the potential 
- DMD is formed with an array of binary matrix of mirrors 
#### B. Magnetic potentials
##### 1. Magnetic traps
- The most common traps:
	- Ioffe-Pritchard (IP) trap
		- Consists of a radial quadrupole and an axial parabolic field 
	- Time-orbiting potential (TOP) trap
		- Uses a static magnetic quadrupole field with a rotating
##### 2. Atom chips
- Consists of transverse homogeneous magnetic field with a current-carrying wire
	- Different wire shapes will produce different complicated magnetic field trap structures 
	- Easy to cool by placing it on top of cold substrate
	- Compact and easy to manipulate
- Downside: very susceptible to noise and erors
##### 3. Adiabatic magnetic potentials
- A radiofrequency field strongly couples magnetic hyperfine states
##### 4. Time-averaged adiabatic potentials (TAAPs)
- Combining adiabatic magnetic potentials with oscillating homogeneous magnetic field
- You can trap two spin components into the same identical potential trap
	- Applications in atom interferometry, where they could be separated, then recombined to make a highly sensitive interferometer 
	- 📚 [Navez et al., 2016] and [Stevenson et al., 2015] 
- TAAP generates its field from distant sources, so it is less likely to be susceptible to nearby errors
#### C. Atom optical elements
##### 1. Waveguides 
##### 2. Ring traps
- Near the trap minimum, the potential energy can be viewed as $$
	U = \frac{1}{2} m \omega_{\rho}^2 {\pqty{\rho- \rho_0}}^2 + \frac{1}{2} m \omega_z^2 z^2 \,,
$$ where $m$ is the mass of the particle, $\omega_{\rho}$ and $\omega_z$ are the harmonic trapping frequencies in the radial and vertical directions, respectively. 
- Two regimes:
	- Small radius where the excitations along the circumference is important
	- Circular waveguide 
- Experimental achievements:
	- Smooth potentials of ring radii and lattice spacings of 100 $\mathrm{\mu m}$ and 30 $\mathrm{\mu m}$ respectively
	- Ring radius of 40 $\mathrm{\mu m}$ and lattice spacing 4 $\mathrm{\mu m}$ 
	- Not small enough to have appreciable tunneling 
##### 3. Barriers and beam splitters
- We make beam splitters using both time-dependent and time-independent potentials, while we make barriers using time-independent potentials 
- It is difficult to construct barriers and beam splitters using purely magnetic approaches; use optical or hybrid magnetic and optical or radio-frequency approaches 
#### III. Coherent Effects in Mesoscopic Matter-wave Circuits 
- Atomtronics can be used to perform quantum interference, often at the mesoscopic scale 
- Quantum coherent transport requires low temperature
	- Fermi gases, length scales: $\hbar v_F/k_B T$ where $v_F$ is the Fermi velocity or thermal de Broglie wavelength
	- Boson gases: BEC ensures coherence at large distances  
- Ring-shaped circuits are elementary building blocks for atomtronic circuits 
##### A. Model Hamiltonians
###### 1. Bosons
- Bose–Hubbard Model $$ \Ham\rewop{BH} = \sum_{\langle i, j \rangle}^{N_s} {\bqty{-J {\pqty{a_j^\dagger a_{j+1} + a_{j+1}^\dagger a_j}} + \frac{U}{2} n_j {\pqty{n_j - 1}}}} \,, $$where $a_j^\dagger$ and $a_j$ are the creation and annihilation operator at site $j$, respectively, $J$ is the hopping amplitude, $U$ is the interaction strength, $N_S$ is the number of sites 
	- Useful to study Mott insulator–superfluid quantum phase transitions
	- For neutral matter, the vector potential $\vb{A} {\pqty{\vb{x}, t}}$ provides an artificial gauge field; using the Peierls substitution, the gauge field can be absorbed into the hopping parameter, providing phase $$ J = \Exp{\I \Phi} J_0 \qq{where} \Phi = \INT{\vb{r}_i}{\vb{r}_{i+1}} \vb{A}{\pqty{\vb{r},t}} \dd{\vb{r}} \,. $$
	- For large particle number per site, $N/N_S \gg 1$, the Bose–Hubbard model reduces to the quantum phase model
	- For small filling fraction $N / N_S \ll 1$, the Bose-Hubbard model reduces to the Bose-gas continuous theory
- Quantum phase model $$ \Ham\rewop{QP} = - 2 J_E \sum_{\langle i, j \rangle}^{N_S} {\bqty{\cos {\pqty{\phi_i - \phi_j - \Phi}} + \frac{U}{2} \sum_{j=1}^{N_S} Q_j^2 }} \,, $$where  $J_E = J N_S$, $Q_j = n_j - N/N_S$ are the on-site particle-number fluctuations, $\phi_j$ are the Hermitian phase operators with the commutation relation ${\bqty{\phi_i, Q_j}} = \I \hbar \delta_{ij}$.   
- Bose-gas continuous theory $$ \Ham\rewop{BG} = \int {\pqty{\dd{\vb{r}}}} {\bqty{{\pqty{\pdv{\Psi^\dagger}{\vb{r}}}} {\pqty{\pdv{\Psi}{\vb{r}}}} + c \Psi^\dagger \Psi^\dagger \Psi \Psi }} $$ where $c = U / t \Delta$. 
	- In first quantisation, this reduces to the Lieb–Liniger model
- Libb–Liniger model $$ \Ham\rewop{LL} = \sum_{j=1}^{N_p} \frac{\hbar^2}{2m} {\pqty{-\I \pdv{}{x_j} - \frac{\Phi}{2 \pi N_S} }}^2 + g  \sum_{1 \leq j < k < N_p} \delta {\pqty{x_j - x_k}} \,, $$ where this is 
- Some equation $$ y = mx + c $$  
 

