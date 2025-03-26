theref=new Array()
comment=new Array()
emailinstructor=""
booktitle="<u>Chemistry and Chemical Reactivity</u><br> Kotz and Treichel;Thomson Publishing"
//If you wish to have an email link to you at the bottom of each page, put your complete email address and you name below, where noted and remove the // front of the line
emailinstructor="<br><a href='mailto:svanbram@science.widener.edu'>Feedback to Dr Van Bramer</a><br>"
emailgeorge="<a href='mailto:gwiger@chemistry.csudh.edu'>Feedback to George Wiger</a>"
returnlink="<a href='index.html'>Lecture Help Main Page</a><br>"
function setrefs(){
	thereference=comment[refnumber]+"<br>"+booktitle+"<br>"+theref[refnumber]+"<br>"+returnlink+emailinstructor+emailgeorge
	if(thisbrowser=="IE"){
		refspot.innerHTML=thereference
		}
	else{
		if(thisbrowser=="NN4"){
		document.refspot.document.open()
		document.refspot.document.write(thereference)
		document.refspot.document.close()
		}
		else{
			document.getElementById("refspot").innerHTML=thereference
			}
		}
}


//Basic Concept Section
//Significant Figures
theref[1]="page 32"
comment[1]=""
//Exponents
theref[2]="this is the reference"
comment[2]=""
//Direct and Inverse relationships
theref[3]="this is the reference"
comment[3]=""
//Direct and Inverse-Word Problems
theref[4]="this is the reference"
comment[4]=""
//Scientific Notation
theref[5]="page A 2"
comment[5]=""
//Smaller, larger or the same
theref[6]="this is the reference"
comment[6]=""
//Mass, density and volume
theref[7]="page 15"
comment[7]=""
//Percentage
theref[8]=""
comment[8]=""
//Wavelength, frequency and energy
theref[9]="chapter 7 section 1 and 2"
comment[9]=""
//Mass, density and volume-word problems
theref[10]="page 15"
comment[10]=""
//Exercises in comparison
theref[11]=""
comment[11]=""
//Further Exercises in comparison
theref[12]=""
comment[12]=""
//Which is it?
theref[13]=theref[12]
comment[13]=""
//Mass, mole and volume-comparing two elements
theref[14]="section 2.5"
comment[14]=""
//Make a guess #1
theref[15]="this is the reference"
comment[15]=""
//Make a guess #2
theref[16]="this is the reference"
comment[16]=""
//Make a better guess#1
theref[17]="this is the reference"
comment[17]=""
//Make a better guess #2
theref[18]="this is the reference"
comment[18]=""
//A,B,pA,pB
theref[19]="this is the reference"
comment[19]=""
//the following are left empty for future developments
//Using Molar Volumes
theref[20]="Use the information provided on the periodic table."
comment[20]=""
theref[21]="this is the reference"
theref[22]="this is the reference"
theref[23]="this is the reference"
theref[24]="this is the reference"
theref[25]="this is the reference"
theref[26]="this is the reference"
theref[27]="this is the reference"
theref[28]="this is the reference"
theref[29]="this is the reference"
//Converting dimensions
//Converting V
theref[30]="Chapter 1 section 7"
comment[30]=""
//Converting M
theref[31]="Chapter 1 section 7"
comment[31]=""
//Converting distance
theref[32]="Chapter 1 section 7"
comment[32]=""
//Converting density
theref[33]="Chapter 1 section 7"
comment[33]=""
//the following are left open for further developments
theref[34]="this is the reference"
theref[35]="this is the reference"
theref[36]="this is the reference"
theref[37]="this is the reference"
theref[38]="this is the reference"
//Atoms and elements
//Protons, electrons and neutrons
theref[39]="Chapter 2 section 1-4"
comment[39]=""
//elements, moles and mass
theref[40]="Chapter 2 section 5"
comment[40]=""
//The Periodic table
theref[41]="this is the reference"
comment[41]=""
//The quantum numbers
theref[42]="Chapter 7.5"
comment[42]=""
//electronic structures
theref[43]="Chapter 8"
comment[43]=""
//Atomic Spectrum of hydrogen
theref[44]="Chapter 7.3"
comment[44]=""
//The de Broglie Wave Equation
theref[45]="Chapter 7.4"
comment[45]=""
//the following left open for further developments
theref[46]="this is the reference"
theref[47]="this is the reference"
theref[48]="this is the reference"
theref[49]="this is the reference"
theref[50]="this is the reference"
theref[51]="this is the reference"
theref[52]="this is the reference"
//Gas Laws
//Boyle's law
theref[53]="Chapter 12.2"
comment[53]=""
//Charles' Law
theref[54]="Chapter 12.2"
comment[54]=""
//Avogadro's Law
theref[55]="Chapter 12.2"
comment[55]=""
//Combined Gas Law
theref[56]="Chapter 12.2"
comment[56]=""
//Ideal gas equation
theref[57]="Chapter 12.3"
comment[57]=""
//Complete Gas Law Page
theref[58]="this is the reference"
comment[58]=""
//Graham's Law
theref[59]="Chapter 12.7"
comment[59]=""
//Raoult's Law
theref[60]="Chapter 14.4"
comment[60]=""
//Clausius-Clapeyron Equation
theref[61]="Chapter 13.5"
comment[61]=""
//Dalton's Laws of Partial Pressure
theref[62]="Chapter 12.5"
comment[62]=""
//the folllowing left empty for future developments
theref[63]="this is the reference"
theref[64]="this is the reference"
theref[65]="this is the reference"
theref[66]="this is the reference"
theref[67]="this is the reference"
theref[68]="this is the reference"
theref[69]="this is the reference"
theref[70]="this is the reference"
//Solutions
//Molarity,moles and Volume
theref[71]="Chapter 5.8"
comment[71]=""
//Molarity, mass and volume
theref[72]="Chapter 5.8"
comment[72]=""
//Osmotic Pressure
theref[73]="Chapter 14.4"
comment[73]=""
//Freezing and boiling points
theref[74]="Chapter 14.4"
comment[74]=""
//the following left open for future developments
theref[75]="this is the reference"
theref[76]="this is the reference"
theref[77]="this is the reference"
theref[78]="this is the reference"
theref[79]="this is the reference"
theref[80]="this is the reference"
theref[81]="this is the reference"
theref[82]="this is the reference"
theref[83]="this is the reference"
theref[84]="this is the reference"
theref[85]="this is the reference"
//Heat and T
//Converting Ts
theref[86]="this is the reference"
comment[86]=""
//Heat and T changes-water
theref[87]="Chapter 6.2"
comment[87]=""
//heat transfer-water
theref[88]="Chapter 6."
comment[88]=""
//heat transfer-water and another substance
theref[89]="Chapter 6."
comment[89]=""
//the following left open for future developments
theref[90]="this is the reference"
theref[91]="this is the reference"
theref[92]="this is the reference"
theref[93]="this is the reference"
theref[94]="this is the reference"
theref[95]="this is the reference"
theref[96]="this is the reference"
theref[97]="this is the reference"
theref[98]="this is the reference"
theref[99]="this is the reference"
//Thermochemistry
//Hess' Law
theref[100]="Chapter 6.7"
comment[100]=""
//The thermochemical equation
theref[101]="this is the reference"
comment[101]=""
//Using Bond energies
theref[102]="Chapter 9.8"
comment[102]=""
//Using heats of formation
theref[103]="Chapter 6.8"
comment[103]=""
//The following left empty for future developments
theref[104]="this is the reference"
theref[105]="this is the reference"
theref[106]="this is the reference"
theref[107]="this is the reference"
theref[108]="this is the reference"
theref[109]="this is the reference"
//Second Law
theref[110]="Chapter 19.3"
theref[111]="this is the reference"
theref[112]="this is the reference"
//Acids and Bases
//pH,pOH, etc
theref[113]="Chapter 5.9 and 17.3"
comment[113]=""
//Solutions of acids and bases
theref[114]="Chapter 17 "
comment[114]=""
//Solutions of acids and bases
theref[115]="Chapter 17"
comment[115]=""
//Solutions of acids and bases-multistep
theref[116]="Chapter 17"
comment[116]=""
//Solutions of acids and Bases-multistep
theref[117]="Chapter 17"
comment[117]=""
//Acid-base titrations
theref[118]="Chapter 5.10 and 18.3"
comment[118]=""
//Composition of buffers
theref[119]="Chapter 18.2"
comment[119]=""
//Properties of buffers
theref[120]="Chapter 18.2"
comment[120]=""
//Proton transfer reactions
theref[121]="Chapter 17.2"
comment[121]=""
//Acid-base titrations
theref[122]="Chpater 5.10 and 18.3"
comment[122]=""
//the following left open for future development
theref[123]="this is the reference"
theref[124]="this is the reference"
theref[125]="this is the reference"
theref[126]="this is the reference"
//pA,pB etc
theref[127]="There is no text reference for this exercise. Refer to your lecture notes."
comment[127]=""
//Solubility
//slightly soluble salts
theref[128]="Chapter 18.4"
comment[128]=""
//solubility and common ion
theref[129]="Chapter 5.2, 18.4 and 18.5"
comment[129]=""
//precipitation
theref[130]="Chapter 5.2, 18.4 and 18.5"
comment[130]=""
//the following left open
theref[131]="this is the reference"
theref[132]="this is the reference"
theref[133]="this is the reference"
theref[134]="this is the reference"
theref[135]="this is the reference"
//Nomenclature
//Simple nomenclature-formulas to names
theref[136]="Chapter 3"
comment[136]=""
//Simple nomenclature-names to formulas
theref[137]=theref[136]
comment[137]=""
//Nomenclature-Stock notation
theref[138]=theref[136]
comment[138]=""
//the following left open
theref[139]="this is the reference"
theref[140]="this is the reference"
theref[141]="this is the reference"
theref[142]="this is the reference"
theref[143]="this is the reference"
//Chemical formulas
//Mass, moles and gfw
theref[144]="Chapter 3.5"
comment[144]=""
//Chemical formulas and mass relationships
theref[145]="Chapter 3.5"
comment[145]=""
//Calculations based on chemical formulas
theref[146]="Chapter 3.5"
comment[146]=""
//Formulas and percent composition
theref[147]="Chapter 3.6"
comment[147]=""
//Combustions analysis
theref[148]="Chapter 3.6 and 4.6"
comment[148]=""
//Calculating GFWs
theref[149]="Chapter 3"
comment[149]=""
//Empirical Formulas
theref[150]="Chapter 3.6"
comment[150]=""
//the following left open
theref[151]="this is the reference"
theref[152]="this is the reference"
theref[153]="this is the reference"
theref[154]="this is the reference"
theref[155]="this is the reference"
theref[156]="this is the reference"
theref[157]="this is the reference"
//Kinetics
//Determing Orders and rate constants
theref[158]="Chapter 15"
comment[158]=""
//Using the rate law
theref[159]="Chapter 15"
comment[159]=""
//First order processes
theref[160]="Chapter 15"
comment[160]=""
//The Arrhenius Equation
theref[161]="Chapter 15"
comment[161]=""
//Mechanisms and rate laws
theref[162]="Chapter 15"
comment[162]=""
//Mechanisms and rate laws-advanced
theref[163]="Chapter 15"
comment[163]=""
//left open
theref[164]=""
theref[165]="this is the reference"
theref[166]="this is the reference"
theref[167]="this is the reference"
theref[168]="this is the reference"
theref[169]="this is the reference"
theref[160]="this is the reference"
theref[171]="this is the reference"
//Stoichiometry
//Balancing chemical reactions
theref[172]="Chapter 4.2"
comment[172]=""
//Mass relationships in chemical reactions
theref[173]="Chapter 4.3"
comment[173]=""
//Limiting reagents 
theref[174]="Chapter 4.4"
comment[174]=""
//Calculations based on percent yields
theref[175]="Chapter 4.5"
comment[175]=""
//Combining limiting reagent and % yield
theref[176]="Chapter 4"
comment[176]=""
//Mole relationships in chemical reactions
theref[177]="Chapter 4.2"
comment[177]=""
//left open
theref[178]="this is the reference"
theref[179]="this is the reference"
theref[180]="this is the reference"
theref[181]="this is the reference"
theref[182]="this is the reference"
theref[183]="this is the reference"
//Electrochemistry
//Balancing Redox reactions
theref[184]="Chapter 21.1"
comment[184]=""
//Calculating Eo
theref[185]="Chapter 20.4"
comment[185]=""
//Faraday's Laws
theref[186]="Chapter 20.6 and 20.7"
comment[186]=""
//The Nernst Equation
theref[187]="Chapter 20.5"
comment[187]=""
//E and K
theref[188]="Chapter 20.6"
comment[188]=""
//Using the EC series
theref[189]="this is the reference"
comment[189]=""
//left open
theref[190]="this is the reference"
theref[191]="this is the reference"
theref[192]="this is the reference"
theref[193]="this is the reference"
theref[194]="this is the reference"
//Chemical Equilibrium
//Calculating K
theref[195]="Chapter 16.2"
comment[195]=""
//Calculating an Equil conc.
theref[196]="Chapter 16.3"
comment[196]=""
//Q vs K
theref[197]="Chapter 16.2"
comment[197]=""
//The LeChatelier Effect
theref[198]="Chapter 16.6"
comment[198]=""
//Combining Equilibria
theref[199]="Chapter 16.5"
comment[199]=""
//left open 
//Adv Equilibria #1
theref[200]="Chapter 16"
comment[200]=""
//Kc and Kp
theref[201]="Chapter 16"
comment[201]=""
//Advanced Problems-Calculate K
theref[202]=theref[195]
theref[203]="this is the reference"
theref[204]="this is the reference"
theref[205]="this is the reference"
//The scenario
theref[206]="this is the reference"
comment[206]=""
//Structures and bonding
//Hybridization
theref[207]="Chapter 10.2"
comment[207]=""
//left open
theref[208]="this is the reference"
theref[209]="this is the reference"
theref[210]="this is the reference"
theref[211]="this is the reference"
theref[212]="this is the reference"
theref[213]="this is the reference"
//Organic chemistry
//Recognizing organic fragments
theref[214]="this is the reference"
comment[214]=""
//R and S configurations
theref[215]="this is the reference"
comment[215]=""
//NMR analysis
theref[216]="this is the reference"
comment[217]=""
//Stereochemistry of additions to C=C
theref[217]="this is the reference"
comment[217]=""
//Aromatic substitution reactions
theref[218]="this is the reference"
comment[218]=""
//Electrocyclic processes
theref[219]="this is the reference"
comment[219]=""
//left open
theref[220]="this is the reference"
theref[221]="this is the reference"
theref[222]="this is the reference"
theref[223]="this is the reference"
theref[224]="this is the reference"
theref[225]="this is the reference"
theref[226]="this is the reference"
theref[227]="this is the reference"
theref[228]="this is the reference"
theref[229]="this is the reference"
//Advanced topics
//Slater's rules
theref[230]="this is the reference"
comment[230]=""
//Symmetry
theref[231]="this is the reference"
comment[231]=""
//Reducing reducible representations
theref[232]="this is the reference"
comment[232]=""
//Creating Reduc. reps
theref[233]="this is the reference"
comment[233]=""
//Born-Haber cycles
theref[234]="this is the reference"
comment[234]=""
//Hybrid orbitals
theref[235]="Chapter 10.2"
comment[235]=""
//Using Drago-Wayland parameters#1
theref[236]="this is the reference"
comment[236]=""
//Using Drago-Wayland parameters#2
theref[237]="this is the reference"
comment[237]=""
//Latimer Diagrams
theref[238]="this is the reference"
comment[238]=""
theref[239]="this is the reference"
theref[240]="this is the reference"

