---
title: Where did the Fermi Golden Rule come from?
tags:
  - blog
date: 2024-08-29
---
> [!info] 
> 
> This note is prepared for the students of PC3232 Nuclear Physics

Fermi Golden Rule is an equation that describes the transition rate between 2 states. Before we derive the equation, we can obtain the form of the equation by using some physical arguments.

## Physical Intuition
> [!warning] 
> Remember that this is not a rigorous derivation, but a rough physical argument 

Consider a Hamiltonian
$$
\Ham = \Ham_0 + V \,,
$$
where $V$ is a small perturbation to the unperturbed system $\Ham_0$. Suppose the unperturbed system has eigenstates
$$
\Ham_0 \ket{n} = \ket{n} E_n \,.
$$
We are interested in the transition probability between different states under the perturbation $V$. Naturally, we are looking at final states that are different from the initial state. Then, the transition probability amplitude should be proportional to 
$$
\begin{aligned}
\bra{m} \Exp{- \frac{\I t}{\hbar} \Ham} \ket{n} ={}& \bra{m} \Exp{- \frac{\I t}{\hbar} {\pqty{\Ham_0 + V}}} \ket{n} \\
\sim{}& \bra{m} \Exp{- \frac{\I t}{\hbar} \Ham_0} \Exp{- \frac{\I t}{\hbar} V} \ket{n} \,.
\end{aligned}
$$
Since $V$ is a small perturbation, we use its Taylor expansion
$$
\Exp{- \frac{\I t}{\hbar} V} \sim {\pqty{1 - \frac{\I t}{\hbar} V}} \,.
$$
Therefore, 
$$
\begin{aligned}
\bra{m} \Exp{- \frac{\I t}{\hbar} \Ham} \ket{n} \sim{}& \underbrace{\bra{m} \Exp{- \frac{\I t}{\hbar} \Ham_0} \ket{n}}_{=0\text{ for } m \neq n} - \frac{\I t}{\hbar} \bra{m} \Exp{- \frac{\I t}{\hbar} \Ham_0} V \ket{n} \\
\sim{}& - \frac{\I t}{\hbar} \Exp{- \frac{\I t}{\hbar} E_m} \bra{m} V \ket{n} \,.
\end{aligned}
$$
Hence, the transition rate is proportional to
$$
\gamma_{n \rightarrow m} \propto \abs{\bra{m}V\ket{n}}^2 \,.
$$
Also, if there are more number of final states, there is a higher chance for the system to transit into the final state. Therefore, 
$$
\gamma_{n \rightarrow m} \propto \abs{\bra{m}V\ket{n}}^2 \rho {\pqty{E_m}} \,,
$$
where $\rho {\pqty{E_M}}$ is the density of states. 

Since transition rate is probability per unit time, it has a dimension of 
$$
\gamma_{n \rightarrow m} \sim \frac{1}{{\bqty{\text{time}}}} \,.
$$
By dimensional analysis, 
$$
\begin{aligned}
\abs{\bra{m} V \ket{n}}^2 \sim{}& {\bqty{\text{energy}}}^2 \,, \\
\rho {\pqty{E_m}} \sim{}& \frac{1}{{\bqty{\text{energy}}}} \,.
\end{aligned}
$$
We must have 
$$
\gamma_{n \rightarrow m} \propto \frac{1}{\hbar} \abs{\bra{m}V\ket{n}}^2 \rho {\pqty{E_m}} \,,
$$
where $\hbar$ has  the dimension of ${\bqty{\text{energy}}} {\bqty{\text{time}}}$. This is exactly the form of the Fermi Golden Rule, which states that 
$$
\boxed{\gamma_{n \rightarrow m} = \frac{2 \pi}{\hbar} \abs{\bra{m}V\ket{n}}^2 \rho {\pqty{E_m}} \,. } 
$$

> [!info] 
> This transition rate was actually mainly due to Dirac, despite the name.

## Derivation from Perturbation Theory 
To derive the factor of $2 \pi$, we need to use perturbation theory. Consider the Hamiltonian
$$
\Ham = \Ham_0 + \lambda V \,,
$$
where we include the small parameter $\lambda$ more explicitly to use perturbation theory. The dynamics of the system is governed by the Schrödinger equation
$$
\I \hbar \pdv{}{t} \ket{\Psi} = \Ham \ket{\Psi} \,.
$$
Since $\lambda V$ is a small perturbation, as before, we expand $\ket{\Psi}$ in the unperturbed eigenbasis
$$
\Ham_0 \ket{n} = \ket{n} E_n \,,
$$
so that 
$$
\ket{\Psi} = \sum_n a_n \Exp{- \frac{\I t}{\hbar} E_n} \ket{n} \,.
$$
By applying it into the Schrödinger equation
$$
\begin{aligned}
\I \hbar \pdv{}{t} \ket{\Psi} ={}& \I \hbar \pdv{}{t} \sum_n a_n \Exp{- \frac{\I t}{\hbar} E_n} \ket{n} \\
={}&  \I \hbar \pdv{}{t} \sum_n {\pqty{\pdv{a_n}{t} - a_n \frac{\I E_n}{\hbar}}} \Exp{- \frac{\I t}{\hbar} E_n} \ket{n} \\
={}&  \sum_n {\pqty{\I \hbar \pdv{a_n}{t} + {\color{purple} a_n E_n}}} \Exp{- \frac{\I t}{\hbar} E_n} \ket{n}  \\
\Ham \ket{\Psi} ={}& {\pqty{\Ham_0 + \lambda V}} \sum_n a_n \Exp{- \frac{\I t}{\hbar} E_n} \ket{n} \\
={}& \sum_n {\pqty{{\color{purple} a_n E_n} + \lambda a_n V}} \Exp{- \frac{\I t}{\hbar} E_n} \ket{n} \,.
\end{aligned}
$$
Hence, 
$$
\sum_n \I \hbar \pdv{a_n}{t} \Exp{- \frac{\I t}{\hbar} E_n} \ket{n} = \sum_n \lambda a_n \Exp{- \frac{\I t}{\hbar} E_n} V \ket{n} \,.
$$
By applying a bra $\bra{m}$ in both sides,
$$
\begin{aligned}
\I \hbar \pdv{a_m}{t} \Exp{- \frac{\I t}{\hbar} E_m} ={}& \lambda \sum_n a_n \Exp{- \frac{\I t}{\hbar} E_n} \bra{m} V \ket{n} \\
\I \hbar \pdv{a_m}{t} ={}& \lambda \sum_n a_n \Exp{- \frac{\I t}{\hbar} {\pqty{E_n - E_m}}} \bra{m} V \ket{n} \,.
\end{aligned}
$$
Although $a_n$ are present on both sides of the equation, there is a small parameter $\lambda$ at the right hand side. We can use the self-consistent solution method, which effectively expands $a_n$ in powers of $\lambda$. 

Firstly, when $\lambda = 0$ at the zeroth order,
$$
\I \hbar \pdv{a_m^{(0)}}{t} = 0 \Rightarrow a_m^{(0)} = \text{constant} \,.
$$
Substituting this into the right hand side,
$$
\I \hbar \pdv{a_m^{(1)}}{t} = \lambda \sum_n a_n^{(0)} \Exp{- \frac{\I t}{\hbar} {\pqty{E_n - E_m}}} \bra{m} V \ket{n} \,,
$$
where $a_m^{(1)}$ is the first order approximation. For convenience, we define 
$$
\omega_{nm} \equiv \frac{E_n - E_m}{\hbar} 
$$
and solve the differential equation
$$
\begin{aligned}
\I \hbar \pdv{a_m^{(1)}}{t} ={}& \lambda \sum_n a_n^{(0)} \Exp{- \I t \omega_{nm}} \bra{m} V \ket{n}\\ 
\pdv{a_m^{(1)}}{t} ={}& - \frac{\I}{\hbar} \lambda \sum_n a_n^{(0)} \Exp{- \I t \omega_{nm}} \bra{m} V \ket{n}\\ 
a_m^{(1)} {\pqty{T}} - \underbrace{a_m^{(1)} {\pqty{0}}}_{\mathclap{\text{at }t = 0 \text{ this is the zeroth order solution}}} ={}& - \frac{\I}{\hbar} \lambda \sum_n a_n^{(0)} \INT{0}{T} \dd{t} \Exp{- \I t \omega_{nm}} \bra{m} V \ket{n} \\
\Rightarrow a_m^{(1)} {\pqty{T}} ={}& a_m^{(0)} - \frac{\I}{\hbar} \lambda \sum_n a_n^{(0)} \INT{0}{T} \dd{t} \Exp{- \I t \omega_{nm}} \bra{m} V \ket{n} \,,
\end{aligned}
$$
where we observe that $a_m^{(1)} {\pqty{T}}$ is first order in $\lambda$. We can continue to substitute into the differential equation to obtain higher order $a_m^{(n)} {\pqty{T}}$ with higher order $\lambda$ expansion. 

For the purpose of the Fermi Golden Rule, we stop at the first order approximation. We are interested in the transition rate from initial state $\ket{i}$ to final state $\ket{f}$ when $i \neq f$. Therefore, we start with $\ket{i}$,
$$
a_n^{(0)} = 0 \, \forall\,  n \neq i \qand a_i^{(0)} = 1 \,.
$$
For the final state $f$, we have
$$
\begin{aligned}
a_f {\pqty{T}} \sim{}& \underbrace{a_f^{(0)}}_{=0} - \frac{\I}{\hbar} \lambda \sum_n \underbrace{a_n^{(0)}}_{\mathclap{=0\text{ except } a_i^{(0)} = 1}} \int_{0}^{T} \dd{t} \Exp{- \I t \omega_{nm}}  \bra{f} V \ket{n} \\
={}& - \frac{\I}{\hbar} \lambda \INT{0}{T} \dd{t} \Exp{- \I t \omega_{if}} \bra{f} V \ket{i} \,.
\end{aligned}
$$
Since by Ansatz
$$
\ket{\Psi} = \sum_n a_n \Exp{- \frac{\I t}{\hbar} E_n} \ket{n} \,,
$$
the probability of being in $\ket{n}$ is $\abs{a_n {\pqty{t}}}^2$. Then, the probability of being in $\ket{f}$ after time $T$ from $\ket{i}$ is 
$$
\begin{aligned}
\abs{\bra{f} U {\pqty{T}} \ket{i} }^2 ={}& \abs{a_f {\pqty{T}}}^2 \\
={}& \frac{\lambda^2}{\hbar^2} \abs{\bra{f} V \ket{i}}^2 \abs{\INT{0}{T} \dd{t} \Exp{- \I t \omega_{if}}}^2 \\
={}& \frac{\lambda^2}{\hbar^2} \abs{\bra{f} V \ket{i}}^2 {\pqty{ \frac{2}{\omega_{if}} \sin \frac{\omega_{if} T}{2}}}^2 \,.
\end{aligned}
$$
> [!hint]- How to do $\ds \INT{0}{T} \dd{t} \Exp{- \I t \omega_{if}}$?
> The integration is evaluated like this:
> $$
> \begin{aligned}
> \INT{0}{T} \dd{t} \Exp{- \I t \omega} ={}& {\bqty{- \frac{1}{\I \omega} \Exp{-\I t \omega}}}_{t=0}^{T} \\
> ={}& \frac{1 - \Exp{- \I T \omega}}{\I \omega}\\
> ={}& \frac{1}{\I \omega} \Exp{- \frac{\I T \omega}{2}} \underbrace{{\pqty{\Exp{\frac{\I T \omega}{2}} - \Exp{-\frac{\I T \omega}{2}} }}}_{=2\I \sin \frac{\omega T}{2}} \\
> ={}& \frac{2}{\omega} \Exp{- \frac{\I T \omega}{2}} \sin \frac{\omega T}{2} \,.
> \end{aligned}
> $$

To proceed, recall that we are interested in obtaining the transition rate, which is the transition probability per unit time
$$
\abs{\bra{f} U {\pqty{T}} \ket{i}}^2 \sim \gamma_{i\rightarrow f} T \,.
$$
If time $T$ is too small, then there is not enough time for the transition, since
$$
\begin{aligned}
\abs{\bra{i} U {\pqty{T}} \ket{i}}^2 ={}& \abs{\bra{i} \Exp{- \frac{\I T}{\hbar} \Ham} \ket{i}}^2 \\
\sim{}& \abs{\bra{i} {\bqty{1 - \frac{\I T}{\hbar} \Ham + \frac{1}{2} {\pqty{- \frac{\I T}{\hbar} \Ham}}^2 }} \ket{i}}^2 \qfor T\ll 1\\
={}& \abs{{\pqty{1 - \frac{\I T}{\hbar} \expval{\Ham} - \frac{T^2}{2 \hbar^2} \expval{\Ham^2} }} }^2 \\
={}& {\pqty{1 - \frac{T^2}{2 \hbar^2} \expval{\Ham^2} }}^2 + \frac{T^2}{\hbar^2} \expval{\Ham}^2 \\
\sim{}& 1 - \frac{T^2}{\hbar^2} {\pqty{\expval{\Ham^2} - \expval{\Ham}^2}} \\
={}& 1 - \frac{T^2}{\hbar^2} \delta \Ham^2 \,,
\end{aligned}
$$
where $\delta \Ham^2$ is the variance of the Hamiltonian, and the probability differs in the order of $\order{T^2}$. Therefore, for the system to transit, $T$ must be long enough, but long with respect to what? With respect to the time scale set by the transition frequency. Therefore, we are looking at a regime where $\omega_{if} T \rightarrow \infty$. 

Consider 
$$
\lim_{\omega T \rightarrow \infty} {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2 \,.
$$
From the graph, 
![[../raw/Where did the Fermi Golden Rule come from 2024-08-25 16.42.20.excalidraw.png |center | 300]]
we see that as $\omega T \rightarrow \infty$, it looks like a Dirac delta function.

To show that it is a Dirac delta function, we use its definition
$$
\INT{- \infty}{\infty} \dd{x} f {\pqty{x}} \delta {\pqty{x}} = f {\pqty{0}} \,,
$$
and consider 
$$
\begin{aligned}
{}& \INT{- \infty}{\infty} \dd{\omega} f {\pqty{\omega}} {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2 \qfor T \gg 1\\
={}& {\bqty{\underbrace{\INT{- \infty}{- \epsilon}}_{(3)} + \underbrace{\INT{- \epsilon}{\epsilon}}_{(2)} + \underbrace{\INT{\epsilon}{\infty}}_{(1)} }} \dd{\omega} f {\pqty{\omega}} {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2 \,.
\end{aligned}
$$
Consider the region (1), 
$$
\begin{aligned}
\INT{\epsilon}{\infty} \dd{\omega} f {\pqty{\omega}} {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2 ={}& \INT{\epsilon}{\infty} \dd{{\pqty{\frac{\omega T}{2}}}} f {\pqty{\omega}} {\pqty{\frac{2}{\omega T} \sin \frac{\omega T}{2}}}^2 2T \\
={}& \INT{\frac{\epsilon T}{2}}{\infty} \dd{y} f {\pqty{\frac{2 y}{T}}} {\pqty{\frac{\sin y}{y}}}^2 2T \\
\xrightarrow{T \rightarrow \infty}{}& \INT{\infty}{\infty} \cdots \rightarrow 0 \,.
\end{aligned}
$$
Therefore, the integral in region (1) is negligible in the limit $T \rightarrow \infty$. The same applies to region (3). Since the integral in region (2) is evaluated around $- \epsilon \leq \omega \leq \epsilon$ for $\epsilon \ll 1$, in region (2), $f {\pqty{\omega}} \sim f {\pqty{0}}$. Therefore, the integral becomes
$$
\begin{aligned}
{}& \INT{- \infty}{\infty} \dd{\omega} f {\pqty{\omega}} {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2 \qfor T \gg 1\\
={}& \INT{- \epsilon}{\epsilon} \dd{\omega} f {\pqty{\omega}} {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2 \\
\sim{}& f {\pqty{0}} \INT{- \epsilon}{\epsilon} \dd{\omega} {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2 \\
={}& f {\pqty{0}} \INT{- \frac{\epsilon T}{2}}{\frac{\epsilon T}{2}} \dd{y} {\pqty{\frac{\sin y}{y}}}^2 2 T\\
\sim{}& 2 f {\pqty{0}} T \INT{- \infty}{\infty} \dd{y} {\pqty{\frac{\sin y}{y}}}^2 \\
={}& 2 \pi T f {\pqty{0}}
\end{aligned} \,.
$$
> [!hint]- How to do $\ds \INT{- \infty}{\infty} \dd{y} {\pqty{\frac{\sin y}{y}}}^2$? 
> $$
> \begin{aligned}
> \INT{- \infty}{\infty} \dd{y} {\pqty{\frac{\sin y}{y}}}^2 ={}& - \INT{- \infty}{\infty} \dd{\frac{1}{y}} {\pqty{\sin y}}^2 \\
> ={}& - \underbrace{\eval{\frac{{\pqty{\sin y}}^2}{y}}_{y= - \infty}^{\infty}}_{=0} + \INT{- \infty}{\infty} \dd{y} \frac{2 \sin y \cos y}{y} \\ 
> ={}& \INT{- \infty}{\infty} \dd{{\pqty{2 y}}} \frac{\sin 2y}{2y} \\
> ={}& \INT{- \infty}{\infty} \dd{y} \frac{\sin y}{y} \,.
> \end{aligned}
> $$

> [!hint]- How to do $\ds \INT{- \infty}{\infty} \dd{y} \frac{\sin y}{y}$? 
> To get the integration of a sinc function, consider
> $$
> \INT{- \infty}{\infty} \dd{x} \frac{\sin x}{x} = 2 \INT{0}{\infty} \frac{\sin x}{x} \,.
> $$
> Define
> $$ \tag{4}
> I {\pqty{t}} = \INT{0}{\infty} \dd{x} \frac{\sin x}{x} \Exp{- x t} \,.
> $$
> Then,
> $$
> \begin{aligned}
> \dv{I {\pqty{t}}}{t} ={}& \INT{0}{\infty} \dd{x} \frac{\sin x}{x} \Exp{- xt} {\pqty{- x}} \\
> ={}& - \INT{0}{\infty} \dd{x} \sin x \Exp{- x t}\\
> ={}& \INT{0}{\infty} \dd{{\pqty{-xt}}} \frac{\sin x}{t} \Exp{- xt} \\
> ={}& \INT{0}{\infty} \dd{{\pqty{\Exp{-xt}}}} \frac{\sin x}{t} \\
> ={}& \underbrace{\eval{\frac{\sin x}{t} \Exp{-xt}}_{x=0}^{\infty}}_{=0} - \INT{0}{\infty} \dd{x} \frac{\cos x}{t} \Exp{-xt}\\
> ={}& \INT{0}{\infty} \dd{{\pqty{-xt}}} \frac{\cos x}{t^2} \Exp{-xt}\\
> ={}& \underbrace{\eval{\frac{\cos x}{t^2} \Exp{-xt}}_{x=0}^{\infty}}_{= -\frac{1}{t^2}} + \INT{0}{\infty} \dd{x} \frac{\sin x}{t^2} \Exp{-xt} \\
> ={}& \frac{1}{t^2} {\pqty{-1 + \INT{0}{\infty} \dd{x} \sin x \Exp{-xt} }} \\
> \Rightarrow \INT{0}{\infty} \dd{x} \Exp{-xt} \sin x ={}& \frac{1}{t^2} \frac{1}{\frac{1}{t^2} + 1} \\
> \dv{I {\pqty{t}}}{t} ={}& \frac{-1}{1 + t^2} \\
> I {\pqty{t}} ={}& C_0 - \arctan{t}
> \end{aligned}
> $$
> From (4):
> $$
> I {\pqty{t \rightarrow \infty}} = 0 = C_0 - \frac{\pi}{2} \Rightarrow C_0 = \frac{\pi}{2} \,.
> $$
> Hence, 
> $$
> \begin{aligned}
> I {\pqty{t}} ={}& \frac{\pi}{2} - \arctan {\pqty{t}} \\
> I {\pqty{0}} ={}& \frac{\pi}{2} = \INT{0}{\infty} \dd{x} \frac{\sin x}{x} \\
> \therefore \INT{- \infty}{\infty} \dd{x} \frac{\sin x}{x} ={}& \pi
> \end{aligned}
> $$

> [!info]
> $\ds \frac{\sin x}{x} \equiv \sinc x$ is also called the sinc function

Hence,
$$
\lim_{\omega T \rightarrow \infty} {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2 = 2 \pi T \delta {\pqty{\omega}} \,.
$$
Then, 
$$
\abs{\bra{f} U {\pqty{T}} \ket{i}}^2 \rightarrow \frac{\lambda^2}{\hbar^2} \abs{\bra{f} V \ket{i}}^2 2 \pi T \delta {\pqty{\omega_{if}}} 
$$
and 
$$
\begin{aligned}
\gamma_{i \rightarrow f} ={}& \frac{\lambda^2}{\hbar^2} \abs{\bra{f} V \ket{i}}^2 2 \pi \delta {\pqty{\frac{E_f - E_i}{\hbar}}}\\
={}& \frac{2 \pi}{\hbar} \abs{\bra{f} \lambda V \ket{i}}^2 \delta {\pqty{E_f -E_i}} \,.
\end{aligned}
$$
Finally, if we integrate over all degenerate final states by using the density of states, the total transition rate is 
$$
\begin{aligned}
\gamma ={}& \int \dd{E_f} \rho {\pqty{E_f}} \frac{2 \pi}{\hbar} \abs{\bra{f} \lambda V \ket{i}}^2 \delta {\pqty{E_f - E_i}} \\
\gamma ={}& \frac{2 \pi}{\hbar} \abs{\bra{f} \lambda V \ket{i}}^2 \underbrace{\rho {\pqty{E_i}}}_{\mathclap{= \rho {\pqty{E_f}} \text{ because of Dirac delta function}}} \,. \quad \quad \quad \quad \quad \Aboxed{\quad \quad \quad \quad \quad \quad \gamma = \frac{2 \pi}{\hbar} \abs{\bra{f} \lambda V \ket{i}}^2 \underbrace{\rho {\pqty{E_i}}}_{\mathclap{= \rho {\pqty{E_f}} \text{ because of Dirac delta function}}}}
\end{aligned}
$$
This is the Fermi Golden Rule.

## Fourier Transform Approach
We could use Fourier transform to obtain the limit 
$$
\lim_{\omega T \rightarrow \infty} {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2 \,.
$$
Consider
$$
\begin{aligned}
\FF {\bqty{ {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2}}}^2}} ={}& \frac{1}{\sqrt{2 \pi}} \INT{- \infty}{\infty} \dd{\omega} \frac{4}{\omega^2} \sin^2 \frac{\omega T}{2} \Exp{- \I \omega t} \\
={}& \frac{1}{\sqrt{2 \pi}} \INT{- \infty}{\infty} \dd{\omega} \frac{4}{\omega^2} {\pqty{\frac{1}{2 \I}}}^2 {\pqty{\Exp{\frac{\I \omega T}{2}} - \Exp{- \frac{\I \omega T}{2}} }}^2 \Exp{- \I \omega t} \\
={}& - \frac{1}{\sqrt{2 \pi}} \INT{- \infty}{\infty} \dd{\omega} \frac{1}{\omega^2} {\pqty{\Exp{\I \omega T} + \Exp{- \I \omega T} - 2}} \Exp{- \I \omega t} \\
={}& - \frac{1}{\sqrt{2 \pi}} \INT{- \infty}{\infty} \dd{\omega} \frac{1}{\omega^2} {\pqty{\Exp{\I \omega {\pqty{T - t}}} + \Exp{- \I \omega {\pqty{T+t}}} - 2\Exp{- \I \omega t}}}  \\
={}& \frac{1}{\sqrt{2 \pi}} {\bqty{ \pi {\pqty{t - T}} \sgn {\pqty{t - T}} + \pi {\pqty{T + t}} \sgn {\pqty{T + t}} - 2 \pi t \sgn t  }} \\
\xrightarrow{t < T \rightarrow \infty}{}& \frac{1}{\sqrt{2 \pi}} {\bqty{\pi {\pqty{T -t}} + \pi {\pqty{T + t}} - 2 \pi \abs{t}}} \\
={}& \sqrt{\frac{\pi}{2}} 2 {\pqty{T - \abs{t}}} \\
\rightarrow{}& \sqrt{2 \pi} T \,,
\end{aligned}
$$
which is a constant. The inverse Fourier transform is
$$
\begin{aligned}
\lim_{T \rightarrow \infty} \FF^{-1} {\bqty{\FF {\bqty{ {\pqty{\frac{2}{\omega} \sin \frac{\omega T}{2} }}^2 }} }} ={}& \frac{1}{\sqrt{2 \pi}} \INT{- \infty}{\infty} \dd{t} \sqrt{2 \pi} T \Exp{\I \omega t} \\
={}& 2 \pi T \delta {\pqty{\omega}} \,,
\end{aligned}
$$
as expected. 

> [!hint]- How to do $\ds \INT{- \infty}{\infty} \dd{\omega} \frac{\Exp{- \I \omega t}}{\omega^2}$? 
> We can use Residue theorem to evaluate it. There is only a pole at $\omega = 0$. To find its residue, we expand its Laurent series
> $$
> \begin{aligned}
> \frac{1}{\omega^2} \Exp{- \I \omega t} ={}& \frac{1}{\omega^2} \sum_n \frac{{\pqty{-\I \omega t}}^n}{n!} \\
> ={}& \frac{1}{\omega^2} - \frac{\I \omega t}{\omega^2} - \frac{\omega^2 t^2}{2 \omega^2} + \order{\omega} \,.
> \end{aligned}
> $$
> The residue is $- \I t$. We then consider the contour. For $t > 0$, 
> ![[../raw/Where did the Fermi Golden Rule come from 2024-08-29 21.48.03.excalidraw.png | center | 400]]
> By residue theorem
> $$
> \begin{aligned}
> (a) + (b) + (c) + (d) ={}& 0 \\
> (a) + (c) ={}& \text{Integral we want}\\
> (b) ={}& 2 \pi \I \times \text{Residue} \times \frac{1}{2} \\
> ={}& \pi t \,.\\
> \Rightarrow \INT{- \infty}{\infty} \dd{\omega} \frac{\Exp{- \I \omega t}}{\omega^2} ={}& - \pi t \,.
> \end{aligned}
> $$
> Similarly, if $t < 0$, 
> $$
> \INT{- \infty}{\infty} \dd{\omega} \frac{\Exp{- \I \omega t}}{\omega^2} = \pi t \,.
> $$
> Together, we have 
> $$
> \INT{- \infty}{\infty} \dd{\omega} \frac{\Exp{- \I \omega t}}{\omega^2} = - \pi t\, \sgn {\pqty{t}} \,.
> $$
> 

> [!note]
> For the handwritten PDF notes: [[../raw/FermiGoldenRule.pdf|Fermi Golden Rule]] 