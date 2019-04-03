var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "#![CEP-logo](assets/cep_text.svg)-1",
    "page": "Introduction",
    "title": "(Image: CEP logo)",
    "category": "section",
    "text": "(Image: ) (Image: ) (Image: Build Status)CEP is a julia implementation of a input-data-scaling capacity expansion modeling framework.Model Information \nModel class Capacity Expansion Problem\nModel type Optimization, Linear optimization model input-data depending energy system\nSectors (currently) Electricity\nTechnologies dispathable and non-dispathable Generation, Storage (seasonal), Transmission\nDecisions investment and dispatch\nObjective Total system cost\nVariables Cost, Capacities, Generation, Storage, Lost-Load, Lost-EmissionsInput Data Depending Provided Input Data\nRegions California, USA (single and multi-node) and Germany, Europe (single and multi-node)\nGeographic Resolution aggregated regions\nTime resolution hourly\nNetwork coverage transmission, DCOPF load flowThe package uses ClustForOpt as a basis for it\'s time-series aggregation.This package is developed by Elias Kuepper @YoungFaithful and Holger Teichgraeber @holgerteichgraeber."
},

{
    "location": "#Installation-1",
    "page": "Introduction",
    "title": "Installation",
    "category": "section",
    "text": "This package runs under julia v1.0 and higher. Install using:]\nadd https://github.com/YoungFaithful/CEP.jl.gitwhere ] opens the julia package manager."
},

{
    "location": "workflow/#",
    "page": "Workflow",
    "title": "Workflow",
    "category": "page",
    "text": ""
},

{
    "location": "workflow/#Workflow-1",
    "page": "Workflow",
    "title": "Workflow",
    "category": "section",
    "text": "The workflow for this package can be broken down to:Data Preparation\nOptimization"
},

{
    "location": "workflow/#Data-Preparation-1",
    "page": "Workflow",
    "title": "Data Preparation",
    "category": "section",
    "text": "The CEP needs two types of dataTime series data in the type ClustData - Preparing ClustData\nCost, node, (line), and technology data in the type OptDataCEP - Preparing OptDataCEThey are kept separate as just the time series dependent data is used to determine representative periods (clustering).(Image: Plot)"
},

{
    "location": "workflow/#Example-Workflow-1",
    "page": "Workflow",
    "title": "Example Workflow",
    "category": "section",
    "text": "using CEP\nusing Clp\noptimizer=Clp.Optimizer # select optimizer\n\n## LOAD DATA ##\n# laod ts-data\nts_input_data = load_timeseries_data_provided(\"GER_1\"; T=24, years=[2016])\n# load cep-data\ncep_data = load_cep_data_provided(\"GER_1\")\n\n## OPTIMIZATION ##\n# run a simple\nrun_opt(ts_input_data,cep_data,optimizer)"
},

{
    "location": "preparing_clust_data/#",
    "page": "Preparing ClustData",
    "title": "Preparing ClustData",
    "category": "page",
    "text": ""
},

{
    "location": "preparing_clust_data/#Preparing-ClustData-1",
    "page": "Preparing ClustData",
    "title": "Preparing ClustData",
    "category": "section",
    "text": ""
},

{
    "location": "preparing_clust_data/#CEP.load_timeseries_data_provided",
    "page": "Preparing ClustData",
    "title": "CEP.load_timeseries_data_provided",
    "category": "function",
    "text": "loadtimeseriesdataprovided(region::String=\"GER1\"; T::Int64=24, years::Array{Int64,1}=[2016], att::Array{String,1}=Array{String,1}())\n\nAdding the information in the *.csv file at data_path to the data dictionary\n\nThe *.csv files shall have the following structure and must have the same length: |Timestamp |Year  |[column names...]| |–––––|–––|––––––––-| |[iterator]|[year]|[values]         | The first column should be called Timestamp if it contains a time iterator The other columns can specify the single timeseries like specific geolocation. for regions:\n\n\"GER_1\": Germany 1 node\n\"GER_18\": Germany 18 nodes\n\"CA_1\": California 1 node\n\"CA_14\": California 14 nodes\n\"TX_1\": Texas 1 node\n\n\n\n\n\n"
},

{
    "location": "preparing_clust_data/#Provided-Data-1",
    "page": "Preparing ClustData",
    "title": "Provided Data",
    "category": "section",
    "text": "load_timeseries_data_provided() loads the data for a given region for which data is provided in this package. The optional input parameters to load_timeseries_data_provided() are the number of time steps per period T and the years to be imported.load_timeseries_data_provided"
},

{
    "location": "preparing_clust_data/#ClustForOpt.load_timeseries_data",
    "page": "Preparing ClustData",
    "title": "ClustForOpt.load_timeseries_data",
    "category": "function",
    "text": "load_timeseriesdata(data_path::String; T-#Segments,years::Array{Int64,1}=# years to be selected for the time series, att::Array{String,1}=# attributes to be loaded)\n\nLoading all *.csv files in the folder or the file data_path\nThe *.csv files shall have the following structure and must have the same length:\n\nTimestamp Year [column names...]\n[iterator] [year] [values]\n\nThe first column should be called Timestamp if it contains a time iterator\nThe second column should be called Year and contains the corresponding year\nThe other columns can specify the single timeseries like specific geolocation.\nEach column in [file name].csv file will be added to the ClustData.data called \"[file name]-[column name]\"\nLoads all attributes if the att-Array is empty or only the ones specified in it\n\n\n\n\n\n"
},

{
    "location": "preparing_clust_data/#Your-Own-Data-1",
    "page": "Preparing ClustData",
    "title": "Your Own Data",
    "category": "section",
    "text": "For details refer to ClustForOptnote: Note\nThe keys of {your-time-series}.data have to match \"{time_series (as declared in techs.csv)}-{node}\"load_timeseries_data"
},

{
    "location": "preparing_clust_data/#Aggregation-1",
    "page": "Preparing ClustData",
    "title": "Aggregation",
    "category": "section",
    "text": "Time series aggregation can be applied to reduce the temporal dimension while (if done problem specific correctly) keeping output precise. Aggregation methods are explained in ClustForOpt High encouragement to run a second stage validation step if you use aggregation on your model. Second stage operational validation step"
},

{
    "location": "preparing_clust_data/#Examples-1",
    "page": "Preparing ClustData",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "preparing_clust_data/#Loading-time-series-data-1",
    "page": "Preparing ClustData",
    "title": "Loading time series data",
    "category": "section",
    "text": "using CEP\nstate=\"GER_1\"\n# load ts-input-data\nts_input_data = load_timeseries_data_provided(state; T=24, years=[2016])\nusing Plots\nsavefig(plot(ts_input_data.data[\"solar-germany\"], legend=false, linestyle=:dot, xlabel=\"Time [h]\", ylabel=\"Solar availability factor [%]\"), \"load_timeseries_data.svg\"); nothing # hide(Image: Plot)"
},

{
    "location": "preparing_clust_data/#Aggregating-time-series-data-1",
    "page": "Preparing ClustData",
    "title": "Aggregating time series data",
    "category": "section",
    "text": "savefig(plot(ts_clust_data.data[\"solar-germany\"], legend=false, linestyle=:solid, width=3, xlabel=\"Time [h]\", ylabel=\"Solar availability factor [%]\"), \"clust.svg\"); nothing # hide(Image: Plot)"
},

{
    "location": "preparing_opt_cep_data/#",
    "page": "Preparing OptDataCEP",
    "title": "Preparing OptDataCEP",
    "category": "page",
    "text": ""
},

{
    "location": "preparing_opt_cep_data/#Preparing-OptDataCEP-1",
    "page": "Preparing OptDataCEP",
    "title": "Preparing OptDataCEP",
    "category": "section",
    "text": ""
},

{
    "location": "preparing_opt_cep_data/#CEP.load_cep_data_provided",
    "page": "Preparing OptDataCEP",
    "title": "CEP.load_cep_data_provided",
    "category": "function",
    "text": "load_cep_data_provided(region::String)\n\nLoading from .csv files in a the folder ../CEP/data/{region}/ Follow instructions preparing your own data: -region::String: name of state or region data belongs to -costs::OptVariable: costs[tech,node,year,account,impact] - annulized costs [USD in USD/MW_el, CO2 in kg-CO₂-eq./MW_el] -techs::OptVariable: techs[tech] - OptDataCEPTech -nodes::OptVariable: nodes[tech,node] - OptDataCEPNode -lines::OptVarible: lines[tech,line] - OptDataCEPLine for regions:\n\n\"GER_1\": Germany 1 node\n\"GER_18\": Germany 18 nodes\n\"CA_1\": California 1 node\n\"CA_14\": California 14 nodes\n\"TX_1\": Texas 1 node\n\n\n\n\n\n"
},

{
    "location": "preparing_opt_cep_data/#Loading-Provided-Data-1",
    "page": "Preparing OptDataCEP",
    "title": "Loading Provided Data",
    "category": "section",
    "text": "load_cep_data_provided loads the non time-series dependent data for the CEP and can take the following regions:GER: Germany\nCA: California\nTX: Texasload_cep_data_provided"
},

{
    "location": "preparing_opt_cep_data/#CEP.load_cep_data",
    "page": "Preparing OptDataCEP",
    "title": "CEP.load_cep_data",
    "category": "function",
    "text": "load_cep_data(data_path::String)\n\nLoading from .csv files in a the folder /data_path/ Follow instructions for the CSV-Files: -region::String: name of state or region data belongs to -costs::OptVariable: costs[tech,node,year,account,impact] - annulized costs [USD in USD/MWel, CO2 in kg-CO₂-eq./MWel]-techs::OptVariable: techs[tech] - OptDataCEPTech - -nodes::OptVariable: nodes[tech,node] - OptDataCEPNode -lines::OptVarible`: lines[tech,line] - OptDataCEPLine\n\n\n\n\n\n"
},

{
    "location": "preparing_opt_cep_data/#Loading-Your-Own-Data-1",
    "page": "Preparing OptDataCEP",
    "title": "Loading Your Own Data",
    "category": "section",
    "text": "Use load_cep_data with data_path pointing to the folder with your cost, node, (line), and technology data.load_cep_data"
},

{
    "location": "preparing_opt_cep_data/#CEP.OptVariable",
    "page": "Preparing OptDataCEP",
    "title": "CEP.OptVariable",
    "category": "type",
    "text": " OptVariable\n\n-data::Array - includes the optimization variable output in  form of an array -axes_names::Array{String,1}- includes the names of the different axes and is equivalent to the sets in the optimization formulation -axes::Tuple- includes the values of the different axes of the optimization variables -type::String` - defines the type of the variable being cv - cost variable - dv -design variable - ov - operating variable - sv - slack variable\n\n\n\n\n\n"
},

{
    "location": "preparing_opt_cep_data/#CEP.OptDataCEP",
    "page": "Preparing OptDataCEP",
    "title": "CEP.OptDataCEP",
    "category": "type",
    "text": " OptDataCEP{region::String, costs::OptVariable, techs::OptVariable, nodes::OptVariable, lines::OptVariabl} <: OptData\n\n-region::String          name of state or region data belongs to -costs::OptVariable    costs[tech,node,year,account,impact] - Number -techs::OptVariable    techs[tech] - OptDataCEPTech -nodes::OptVariable    nodes[tech, node] - OptDataCEPNode -lines::OptVarible     lines[tech, line] - OptDataCEPLine instead of USD you can also use your favorite currency like EUR\n\n\n\n\n\n"
},

{
    "location": "preparing_opt_cep_data/#CEP.OptDataCEPTech",
    "page": "Preparing OptDataCEP",
    "title": "CEP.OptDataCEPTech",
    "category": "type",
    "text": " OptDataCEPTech{name::String,categ::String,sector::String,eff::Number,time_series::String,lifetime::Number,financial_lifetime::Number,discount_rate::Number, annuityfactor::Number} <: OptData\n\nname\ncateg: the category of this technology (is it storage, transmission or generation)\nsector: sector of the technology (electricity or heat)\neff: efficiency of this technologies conversion [-]\ntime_series: time_series name for availability\nlifetime: product lifetime [a]\nfinancial_lifetime: financial time to break even [a]\ndiscount_rate: discount rate for technology [a]\nannuityfactor: annuity factor, important for cap-costs [-]\n\n\n\n\n\n"
},

{
    "location": "preparing_opt_cep_data/#CEP.OptDataCEPNode",
    "page": "Preparing OptDataCEP",
    "title": "CEP.OptDataCEPNode",
    "category": "type",
    "text": " OptDataCEPNode{name::String,value::Number,lat::Number,lon::Number} <: OptData\n\nname\npower_ex existing capacity [MW or MWh (tech_e)]\npower_lim capacity limit [MW or MWh (tech_e)]\nregion\nlatlon hold geolocation information [°,°]\n\n\n\n\n\n"
},

{
    "location": "preparing_opt_cep_data/#CEP.OptDataCEPLine",
    "page": "Preparing OptDataCEP",
    "title": "CEP.OptDataCEPLine",
    "category": "type",
    "text": " OptDataCEPLine{name::String,node_start::String,node_end::String,reactance::Number,resistance::Number,power::Number,circuits::Int64,voltage::Number,length::Number} <: OptData\n\nname\nnode_start Node where line starts\nnode_end Node where line ends\nreactance\nresistance [Ω]\npower_ex: existing power limit [MW]\npower_lim: limit power limit [MW]\ncircuits [-]\nvoltage [V]\nlength [km]\neff [-]\n\n\n\n\n\n"
},

{
    "location": "preparing_opt_cep_data/#Data-Types-1",
    "page": "Preparing OptDataCEP",
    "title": "Data Types",
    "category": "section",
    "text": "OptVariable\nOptDataCEP\nOptDataCEPTech\nOptDataCEPNode\nOptDataCEPLine"
},

{
    "location": "preparing_opt_cep_data/#Examples-1",
    "page": "Preparing OptDataCEP",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "preparing_opt_cep_data/#Example-loading-CEP-Data-1",
    "page": "Preparing OptDataCEP",
    "title": "Example loading CEP Data",
    "category": "section",
    "text": "using CEP\nstate=\"GER_1\"\n# load ts-input-data\ncep_data = load_cep_data_provided(state)\ncep_data.costs"
},

{
    "location": "preparing_opt_cep_data/#Example-indexing-OptVariables-1",
    "page": "Preparing OptDataCEP",
    "title": "Example indexing OptVariables",
    "category": "section",
    "text": "Indexing is provided similar to Arrays:cep_data.costs[\"pv\",\"germany\",2015,\"cap_fix\",\"EUR\"]The axes are named and the axes can be called using the basic axes function and providing the sets name:axes(cep_data.costs,\"tech\")"
},

{
    "location": "csv_structure/#",
    "page": "Provided Data & Personal Data Setup",
    "title": "Provided Data & Personal Data Setup",
    "category": "page",
    "text": ""
},

{
    "location": "csv_structure/#Provided-Data-and-Personal-Data-Setup-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "Provided Data & Personal Data Setup",
    "category": "section",
    "text": ""
},

{
    "location": "csv_structure/#Units-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "Units",
    "category": "section",
    "text": "Timestep (input data) - h\nPower - MW\nEnergy - MWh\nlength - km"
},

{
    "location": "csv_structure/#Provided-Data-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "Provided Data",
    "category": "section",
    "text": "The package provides data for:name nodes lines years tech\nGER-1 1 – germany as single node none 2006-2016 Pv, wind, coal, oil, gas, bat-e, bat-in, bat-out, h2-e, h2-in, h2-out, trans\nGER-18 18 – dena-zones within germany 49 2006-2016 Pv, wind, coal, oil, gas, bat-e, bat-in, bat-out, h2-e, h2-in, h2-out, trans\nCA-1 1 - california as single node none 2014-2017 Pv, wind, coal, oil, gas, bat-e, bat-in, bat-out, h2-e, h2-in, h2-out, trans\nCA-14 14 – multiple nodes within CA (no installed capacities currently) 23 2014-2017 Pv, wind, coal, oil, gas, bat-e, bat-in, bat-out, h2-e, h2-in, h2-out, trans\nTX-1 1 – single node within Texas none 2008 Pv, wind, coal, nuc, gas, bat-e, bat-in, bat-out"
},

{
    "location": "csv_structure/#Personal-Data-Setup-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "Personal Data Setup",
    "category": "section",
    "text": ""
},

{
    "location": "csv_structure/#Folder-Structure-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "Folder Structure",
    "category": "section",
    "text": "costs.csv\nnodes.csv\ntechs.csv\nlines.csv - optional\nTS - subfolder containing time-series-data\n[timeseries name].csv"
},

{
    "location": "csv_structure/#Time-Series-data-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "Time Series data",
    "category": "section",
    "text": "Timestamp year [nodes...]\n[some iterator] relative value of installed capacity for renewables or absolute values for demand or so \n... ... "
},

{
    "location": "csv_structure/#costs.csv-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "costs.csv",
    "category": "section",
    "text": "tech year account [currency] [LCA-Impact categories...]\n[tech] year of this price cap or fix or var Cost per unit Power(MW) or Energy (MWh) Emissions per unit Power(MW) or Energy (MWh)...\n... ... ... ... ..."
},

{
    "location": "csv_structure/#nodes.csv-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "nodes.csv",
    "category": "section",
    "text": "node region infrastruct lon lat [techs...]\n[node...] region of this node ex - existing or lim - limiting capacity Latitude in ° Longitude in ° installed capacity of each tech at this node in MW or MWh\n... ... ... ... ... "
},

{
    "location": "csv_structure/#techs.csv-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "techs.csv",
    "category": "section",
    "text": "|tech|categ|sector|fuel|eff|max_gradient|time_series|lifetime|financial_lifetime|discount_rate| |–––-|––––|–––|––-|––––|–––-|––––––––-|––––––|–––––|––––––––––|–––––––-| |[tech...]| function handeling those |el for electricity|none or fuel dependency|efficiency |max gradient of this technology| none or time-series name of this tech|lifetime of an installed cap|time in which you have to pay back your loan| discount_rate| |...| ...| ...|...| ...|...| ...| ...|...| ...|"
},

{
    "location": "csv_structure/#lines.csv-1",
    "page": "Provided Data & Personal Data Setup",
    "title": "lines.csv",
    "category": "section",
    "text": "note: Note\nEach node_start and node_end has to be a node in the file nodes.csv.line node_start node_end reactance resistance power_ex power_lim voltage circuits length\n[line...] node - line starts node - line ends reactance resistance exisitng capacity in MW capacity limit in MW voltage or description number of circuits included length in km\n... ... ... ... ... ... ... ... ... ..."
},

{
    "location": "README_GER_18/#",
    "page": "GER-18",
    "title": "GER-18",
    "category": "page",
    "text": ""
},

{
    "location": "README_GER_18/#GER-18-1",
    "page": "GER-18",
    "title": "GER-18",
    "category": "section",
    "text": "Germany 18 (dena) nodes, with existing infrastructure of year 2015, no nuclear (Image: Plot)"
},

{
    "location": "README_GER_18/#Time-Series-1",
    "page": "GER-18",
    "title": "Time Series",
    "category": "section",
    "text": "solar: RenewableNinja nuts2 aggregated to dena-zones weighted by geographic area https://www.renewables.ninja\nwind: RenewableNinja nuts2 aggregated to dena-zones weighted by geographic area https://www.renewables.ninja\nel_demand: Share of \"low\" and \"high\"Open Source Electricity Model for Germany (ELMOD-DE) Data Documentation, Egerer, 2016, \"Open Power System Data. 2018. Data Package Time series. Version 2018-06-30. https://doi.org/10.25832/time_series/2018-06-30. (Primary data from various sources, for a complete list see URL).\""
},

{
    "location": "README_GER_18/#Installed-CAP-1",
    "page": "GER-18",
    "title": "Installed CAP",
    "category": "section",
    "text": ""
},

{
    "location": "README_GER_18/#nodes-1",
    "page": "GER-18",
    "title": "nodes",
    "category": "section",
    "text": "wind, pv, coal, gas, oil: Open Source Electricity Model for Germany (ELMOD-DE) Data Documentation, Egerer, 2016"
},

{
    "location": "README_GER_18/#lines-1",
    "page": "GER-18",
    "title": "lines",
    "category": "section",
    "text": "trans: Open Source Electricity Model for Germany (ELMOD-DE) Data Documentation, Egerer, 2016"
},

{
    "location": "README_GER_18/#Cost-Data-1",
    "page": "GER-18",
    "title": "Cost Data",
    "category": "section",
    "text": ""
},

{
    "location": "README_GER_18/#cap-costs-1",
    "page": "GER-18",
    "title": "cap-costs",
    "category": "section",
    "text": "wind, pv, coal, gas, oil: \"Sektorübergreifende Modellierung und Optimierung eines zukünftigen deutschen Energiesystems unter Berücksichtigung von Energieeffizienzmaßnahmen im Gebäudesektor\", Palzer, 2016\ntrans: !Costs for transmission expansion are per MW*km!: \"Zielkonflikte der Energiewende - Life Cycle Assessment der Dekarbonisierung Deutschlands durch sektorenübergreifende Infrastrukturoptimierung\", Reinert, 2018\nbat: \"Konventionelle Kraftwerke - Technologiesteckbrief zur Analyse \'Flexibilitätskonzepte für die Stromversorgung 2050\'\", Görner & Sauer, 2016\nh2: \"Shared Capacity and Levelized Cost with Application to Power-to-Gas Technology\", Glenk, 2019"
},

{
    "location": "README_GER_18/#fix-costs-1",
    "page": "GER-18",
    "title": "fix-costs",
    "category": "section",
    "text": "wind, pv, gas, bat, h2: Percentages M/O per cap_cost: \"Sektorübergreifende Modellierung und Optimierung eines zukünftigen deutschen Energiesystems unter Berücksichtigung von Energieeffizienzmaßnahmen im Gebäudesektor\", Palzer, 2016\noil, coal: assumption oil and coal similar to GuD fix/cap: Percentages M/O per cap_cost: \"Sektorübergreifende Modellierung und Optimierung eines zukünftigen deutschen Energiesystems unter Berücksichtigung von Energieeffizienzmaßnahmen im Gebäudesektor\", Palzer, 2016\ntrans: assumption no fix costs\nh2: \"Shared Capacity and Levelized Cost with Application to Power-to-Gas Technology\", Glenk, 2019"
},

{
    "location": "README_GER_18/#var-costs-1",
    "page": "GER-18",
    "title": "var-costs",
    "category": "section",
    "text": "coal, gas, oil: Calculation: varcosts_th(Masterthesis Christiane Reinert)/eff(median(eff in ELMOD-DE))\npv, wind, bat, h2, trans: assumption no var costs"
},

{
    "location": "README_GER_18/#LCIA-Recipe-H-Midpoint,-GWP-100a-1",
    "page": "GER-18",
    "title": "LCIA Recipe H Midpoint, GWP 100a",
    "category": "section",
    "text": "pv, wind, trans, coal, gas, oil: Ecoinvent v3.3\nbat_e: \"battery cell production, Li-ion, CN\", 5.4933 kg CO2-Eq per 0.106 kWh, Ecoinvent v3.5\nh2_in: \"fuel cell CH future 2kW\", Ecoinvent v3.3"
},

{
    "location": "README_GER_18/#Other-1",
    "page": "GER-18",
    "title": "Other",
    "category": "section",
    "text": "trans: efficiency is 0.9995 per km\nstorage: efficiencies are in efficiency per month\nstorage hydrogen: referenced in MWh with lower calorific value 33.32 kWh/kg \"DIN 51850: Brennwerte und Heizwerte gasförmiger Brennstoffe\" 1980\nh2_in, h2_out: Sunfire process\nh2_e: Cavern"
},

{
    "location": "README_GER_1/#",
    "page": "GER-1",
    "title": "GER-1",
    "category": "page",
    "text": ""
},

{
    "location": "README_GER_1/#GER-1-1",
    "page": "GER-1",
    "title": "GER-1",
    "category": "section",
    "text": "Germany one node,  with existing infrastructure of year 2015, no nuclear (Image: Plot)"
},

{
    "location": "README_GER_1/#Time-Series-1",
    "page": "GER-1",
    "title": "Time Series",
    "category": "section",
    "text": "solar: \"RenewableNinja\",  \"Open Power System Data. 2018. Data Package Time series. Version 2018-06-30. https://doi.org/10.25832/time_series/2018-06-30. (Primary data from various sources, for a complete list see URL).\"\nwind: \"RenewableNinja\":  \"Open Power System Data. 2018. Data Package Time series. Version 2018-06-30. https://doi.org/10.25832/time_series/2018-06-30. (Primary data from various sources, for a complete list see URL).\"\nel_demand: Open Source Electricity Model for Germany (ELMOD-DE) Data Documentation, Egerer, 2016, \"Open Power System Data. 2018. Data Package Time series. Version 2018-06-30. https://doi.org/10.25832/time_series/2018-06-30. (Primary data from various sources, for a complete list see URL).\""
},

{
    "location": "README_GER_1/#Installed-CAP-1",
    "page": "GER-1",
    "title": "Installed CAP",
    "category": "section",
    "text": ""
},

{
    "location": "README_GER_1/#nodes-1",
    "page": "GER-1",
    "title": "nodes",
    "category": "section",
    "text": "wind, pv, coal, gas, oil: Open Source Electricity Model for Germany (ELMOD-DE) Data Documentation, Egerer, 2016"
},

{
    "location": "README_GER_1/#Cost-Data-1",
    "page": "GER-1",
    "title": "Cost Data",
    "category": "section",
    "text": ""
},

{
    "location": "README_GER_1/#General-1",
    "page": "GER-1",
    "title": "General",
    "category": "section",
    "text": "economic lifetime T: Glenk, \"Shared Capacity and Levelized Cost with Application to Power-to-Gas Technology\", Glenk, 2019\ncost of capital (WACC), r:  Glenk, \"Shared Capacity and Levelized Cost with Application to Power-to-Gas Technology\", Glenk, 2019"
},

{
    "location": "README_GER_1/#cap-costs-1",
    "page": "GER-1",
    "title": "cap-costs",
    "category": "section",
    "text": "wind, pv, coal, gas, oil: \"Sektorübergreifende Modellierung und Optimierung eines zukünftigen deutschen Energiesystems unter Berücksichtigung von Energieeffizienzmaßnahmen im Gebäudesektor\", Palzer, 2016\ntrans: !Costs for transmission expansion are per MW*km!: \"Zielkonflikte der Energiewende - Life Cycle Assessment der Dekarbonisierung Deutschlands durch sektorenübergreifende Infrastrukturoptimierung\", Reinert, 2018\nbat: \"Konventionelle Kraftwerke - Technologiesteckbrief zur Analyse \'Flexibilitätskonzepte für die Stromversorgung 2050\'\", Görner & Sauer, 2016\nh2: \"Shared Capacity and Levelized Cost with Application to Power-to-Gas Technology\", Glenk, 2019"
},

{
    "location": "README_GER_1/#fix-costs-1",
    "page": "GER-1",
    "title": "fix-costs",
    "category": "section",
    "text": "wind, pv, gas, bat, h2: Percentages M/O per cap_cost: \"Sektorübergreifende Modellierung und Optimierung eines zukünftigen deutschen Energiesystems unter Berücksichtigung von Energieeffizienzmaßnahmen im Gebäudesektor\", Palzer, 2016\noil, coal: assumption oil and coal similar to GuD fix/cap: Percentages M/O per cap_cost: \"Sektorübergreifende Modellierung und Optimierung eines zukünftigen deutschen Energiesystems unter Berücksichtigung von Energieeffizienzmaßnahmen im Gebäudesektor\", Palzer, 2016\ntrans: assumption no fix costs"
},

{
    "location": "README_GER_1/#var-costs-1",
    "page": "GER-1",
    "title": "var-costs",
    "category": "section",
    "text": "coal, gas, oil: Calculation: varcosts_th(Masterthesis Christiane Reinert)/eff(median(eff in ELMOD-DE))\npv, wind, bat, trans: assumption no var costs\nh2: Glenk, \"Shared Capacity and Levelized Cost with Application to Power-to-Gas Technology\", Glenk, 2019"
},

{
    "location": "README_GER_1/#LCIA-Recipe-H-Midpoint,-GWP-100a-1",
    "page": "GER-1",
    "title": "LCIA Recipe H Midpoint, GWP 100a",
    "category": "section",
    "text": "pv, wind, trans, coal, gas, oil: Ecoinvent v3.3\nbat_e: \"battery cell production, Li-ion, CN\", 5.4933 kg CO2-Eq per 0.106 kWh, Ecoinvent v3.5\nh2_in: \"fuel cell CH future 2kW\", Ecoinvent v3.3"
},

{
    "location": "README_GER_1/#Other-1",
    "page": "GER-1",
    "title": "Other",
    "category": "section",
    "text": "storage: efficiencies are in efficiency per month\nstorage hydrogen: referenced in MWh with lower calorific value 33.32 kWh/kg \"DIN 51850: Brennwerte und Heizwerte gasförmiger Brennstoffe\" 1980\nh2_in, h2_out: Sunfire process\nh2_e: Cavern"
},

{
    "location": "README_CA_14/#",
    "page": "CA-14",
    "title": "CA-14",
    "category": "page",
    "text": ""
},

{
    "location": "README_CA_14/#CA-14-1",
    "page": "CA-14",
    "title": "CA-14",
    "category": "section",
    "text": "California (modeling CAISO) 14-node model, no existing capacity (currently not published) (Image: Plot)"
},

{
    "location": "README_CA_14/#Time-Series-1",
    "page": "CA-14",
    "title": "Time Series",
    "category": "section",
    "text": "el_demand: http://www.caiso.com/planning/Pages/ReliabilityRequirements/Default.aspx#Historical\nsolar: \"RenewableNinja\",  \"Open Power System Data. 2018. Data Package Time series. Version 2018-06-30. https://doi.org/10.25832/timeseries/2018-06-30. (Primary data from various sources, for a complete list see URL).\" (dataset=\"merra2\",systemloss = 10,tracking = 1,tilt = 35,azim = 180)\nwind: \"RenewableNinja\":  \"Open Power System Data. 2018. Data Package Time series. Version 2018-06-30. https://doi.org/10.25832/time_series/2018-06-30. (Primary data from various sources, for a complete list see URL).\"; average hub height in 2016: 80m https://www.eia.gov/todayinenergy/detail.php?id=33912#tab1(capacity = 1.0,height = 80,turbine = \"Vestas+V80+2000\",dataset=\"merra2\",systemloss = 10), locations based on current wind-farms, if available in region (https://www.energy.ca.gov/maps/renewable/wind/WindResourceAreaCA_Statewide.pdf)"
},

{
    "location": "README_CA_14/#Cost-Data-1",
    "page": "CA-14",
    "title": "Cost Data",
    "category": "section",
    "text": ""
},

{
    "location": "README_CA_14/#General-1",
    "page": "CA-14",
    "title": "General",
    "category": "section",
    "text": "economic lifetime T: NREL\ncost of capital (WACC), r: NREL"
},

{
    "location": "README_CA_14/#cap-costs-1",
    "page": "CA-14",
    "title": "cap-costs",
    "category": "section",
    "text": "wind, pv, coal, gas, oil, bat: NREL\ntrans: !Costs for transmission expansion are per MW*km!: \"Zielkonflikte der Energiewende - Life Cycle Assessment der Dekarbonisierung Deutschlands durch sektorenübergreifende Infrastrukturoptimierung\", Reinert, 2018\nh2: \"Shared Capacity and Levelized Cost with Application to Power-to-Gas Technology\", Glenk, 2019"
},

{
    "location": "README_CA_14/#fix-costs-1",
    "page": "CA-14",
    "title": "fix-costs",
    "category": "section",
    "text": "wind, pv, gas, bat, h2, oil, coal: NREL\ntrans: assumption no fix costs"
},

{
    "location": "README_CA_14/#var-costs-1",
    "page": "CA-14",
    "title": "var-costs",
    "category": "section",
    "text": "pv, wind, bat, coal, gas, oil: NREL\nh2, trans: assumption no var costs"
},

{
    "location": "README_CA_14/#LCIA-Recipe-H-Midpoint,-GWP-100a-1",
    "page": "CA-14",
    "title": "LCIA Recipe H Midpoint, GWP 100a",
    "category": "section",
    "text": "pv, wind, trans, coal, gas, oil: Ecoinvent v3.3\nbat_e: \"battery cell production, Li-ion, CN\", 5.4933 kg CO2-Eq per 0.106 kWh, Ecoinvent v3.5\nh2_in: \"fuel cell CH future 2kW\", Ecoinvent v3.3\nphp: ref plant: 15484 GWh/a (BEW 2001a). Lifetime is assumed to be 80 years: 4930800000 kg-CO2-eq (recipe-h-midpoint)/plant, 4930800000/(15484 000 MWh/a80a)(80a8760h/a) → CO2-eq/MW, Ecoinvent v3.5"
},

{
    "location": "README_CA_14/#Other-1",
    "page": "CA-14",
    "title": "Other",
    "category": "section",
    "text": "trans: efficiency is 0.9995 per km\nstorage: efficiencies are in efficiency per month\nstorage hydrogen: referenced in MWh with lower calorific value 33.32 kWh/kg \"DIN 51850: Brennwerte und Heizwerte gasförmiger Brennstoffe\" 1980\nh2_in, h2_out: Sunfire process\nh2_e: Cavern"
},

{
    "location": "README_CA_1/#",
    "page": "CA-1",
    "title": "CA-1",
    "category": "page",
    "text": ""
},

{
    "location": "README_CA_1/#CA-1-1",
    "page": "CA-1",
    "title": "CA-1",
    "category": "section",
    "text": "California (modeling CAISO) one node (Image: Plot)"
},

{
    "location": "README_CA_1/#Time-Series-1",
    "page": "CA-1",
    "title": "Time Series",
    "category": "section",
    "text": "el_demand: http://www.caiso.com/planning/Pages/ReliabilityRequirements/Default.aspx#Historical\nsolar: weighted by area of each of the CA14 nodes: \"RenewableNinja\",  \"Open Power System Data. 2018. Data Package Time series. Version 2018-06-30. https://doi.org/10.25832/timeseries/2018-06-30. (Primary data from various sources, for a complete list see URL).\" (dataset=\"merra2\",system_loss = 10,tracking = 1,tilt = 35,azim = 180)\nwind: weighted by installed capacity on each of the CA14 nodes: \"RenewableNinja\":  \"Open Power System Data. 2018. Data Package Time series. Version 2018-06-30. https://doi.org/10.25832/timeseries/2018-06-30. (Primary data from various sources, for a complete list see URL).\"; average hub height in 2016: 80m https://www.eia.gov/todayinenergy/detail.php?id=33912#tab1(capacity = 1.0,height = 80,turbine = \"Vestas+V80+2000\",dataset=\"merra2\",systemloss = 10), locations based on current wind-farms, if available in region (https://www.energy.ca.gov/maps/renewable/wind/WindResourceAreaCA_Statewide.pdf)"
},

{
    "location": "README_CA_1/#Cost-Data-1",
    "page": "CA-1",
    "title": "Cost Data",
    "category": "section",
    "text": ""
},

{
    "location": "README_CA_1/#General-1",
    "page": "CA-1",
    "title": "General",
    "category": "section",
    "text": "economic lifetime T: NREL\ncost of capital (WACC), r: NREL"
},

{
    "location": "README_CA_1/#cap-costs-1",
    "page": "CA-1",
    "title": "cap-costs",
    "category": "section",
    "text": "wind, pv, coal, gas, oil, bat: NREL\ntrans: !Costs for transmission expansion are per MW*km!: \"Zielkonflikte der Energiewende - Life Cycle Assessment der Dekarbonisierung Deutschlands durch sektorenübergreifende Infrastrukturoptimierung\", Reinert, 2018\nh2: \"Shared Capacity and Levelized Cost with Application to Power-to-Gas Technology\", Glenk, 2019"
},

{
    "location": "README_CA_1/#fix-costs-1",
    "page": "CA-1",
    "title": "fix-costs",
    "category": "section",
    "text": "wind, pv, gas, bat, h2, oil, coal: NREL\ntrans: assumption no fix costs"
},

{
    "location": "README_CA_1/#var-costs-1",
    "page": "CA-1",
    "title": "var-costs",
    "category": "section",
    "text": "pv, wind, bat, coal, gas, oil: NREL\nh2, trans: assumption no var costs"
},

{
    "location": "README_CA_1/#LCIA-Recipe-H-Midpoint,-GWP-100a-1",
    "page": "CA-1",
    "title": "LCIA Recipe H Midpoint, GWP 100a",
    "category": "section",
    "text": "pv, wind, trans, coal, gas, oil: Ecoinvent v3.3\nbat_e: \"battery cell production, Li-ion, CN\", 5.4933 kg CO2-Eq per 0.106 kWh, Ecoinvent v3.5\nh2_in: \"fuel cell CH future 2kW\", Ecoinvent v3.3\nphp: ref plant: 15484 GWh/a (BEW 2001a). Lifetime is assumed to be 80 years: 4930800000 kg-CO2-eq (recipe-h-midpoint)/plant, 4930800000/(15484 000 MWh/a80a)(80a8760h/a) → CO2-eq/MW, Ecoinvent v3.5"
},

{
    "location": "README_CA_1/#Other-1",
    "page": "CA-1",
    "title": "Other",
    "category": "section",
    "text": "trans: efficiency is 0.9995 per km\nstorage: efficiencies are in efficiency per month\nstorage hydrogen: referenced in MWh with lower calorific value 33.32 kWh/kg \"DIN 51850: Brennwerte und Heizwerte gasförmiger Brennstoffe\" 1980\nh2_in, h2_out: Sunfire process\nh2_e: Cavern"
},

{
    "location": "README_TX_1/#",
    "page": "TX-1",
    "title": "TX-1",
    "category": "page",
    "text": ""
},

{
    "location": "README_TX_1/#TX-1-1",
    "page": "TX-1",
    "title": "TX-1",
    "category": "section",
    "text": "Single node of a power grid in Texas, no existing capacityData from Merrick et al. 2016"
},

{
    "location": "README_TX_1/#Cost-Data-1",
    "page": "TX-1",
    "title": "Cost Data",
    "category": "section",
    "text": "Implemented with PV-price 0.5 /Wfix: 2.388E+3 /MW\ncap: 5.16E+5 /MW##Other Alternatively for price of 1.0/W edit .csv files and replace costs with:fix: 4.776E+3 /MW  cap: 1.032E+6 /MWAssuptions for transformation:demand mulitiplied with 1.48\nsolar devided by 1000"
},

{
    "location": "opt_cep/#",
    "page": "Optimization Capacity Expansion Problem",
    "title": "Optimization Capacity Expansion Problem",
    "category": "page",
    "text": ""
},

{
    "location": "opt_cep/#Optimization-Capacity-Expansion-Problem-1",
    "page": "Optimization Capacity Expansion Problem",
    "title": "Optimization Capacity Expansion Problem",
    "category": "section",
    "text": ""
},

{
    "location": "opt_cep/#General-1",
    "page": "Optimization Capacity Expansion Problem",
    "title": "General",
    "category": "section",
    "text": "The capacity expansion problem (CEP) is designed as a linear optimization model. It is implemented in the algebraic modeling language JUMP. The implementation within JuMP allows to optimize multiple models in parallel and handle the steps from data input to result analysis and diagram export in one open source programming language. The coding of the model enables scalability based on the provided data input, single command based configuration of the setup model, result and configuration collection for further analysis and the opportunity to run design and operation in different optimizations.(Image: Plot)The basic idea for the energy system is to have a spacial resolution of the energy system in discrete nodes. Each node has demand, non-dispatchable generation, dispatachable generation and storage capacities of varying technologies connected to itself. The different energy system nodes are interconnected with each other by transmission lines. The model is designed to minimize social costs by minimizing the following objective function:min sum_accounttechCOST_accountEURUSDtech + sum LL cdot  cost_LL + LE cdot  cos_LE"
},

{
    "location": "opt_cep/#Variables-and-Sets-1",
    "page": "Optimization Capacity Expansion Problem",
    "title": "Variables and Sets",
    "category": "section",
    "text": "The models scalability is relying on the usage of sets. The elements of the sets are extracted from the input data and scale the different variables. An overview of the sets is provided in the table. Depending on the models configuration the necessary sets are initialized.name description\nlines transmission lines connecting the nodes\nnodes spacial energy system nodes\ntech fossil and renewable generation as well as storage technologies\nimpact impact categories like EUR or USD, CO 2 − eq., ...\naccount fixed costs for installation and yearly expenses, variable costs\ninfrastruct infrastructure status being either new or existing\nsector energy sector like electricity\ntime K numeration of the representative periods\ntime T numeration of the time intervals within a period\ntime T e numeration of the time steps within a period\ntime I numeration of the time invervals of the full input data periods\ntime I e numeration of the time steps of the full input data periods\ndir transmission direction of the flow uniform with or opposite to the lines directionAn overview of the variables used in the CEP is provided in the table:name dimensions unit description\nCOST [account,impact,tech] EUR/USD, LCA-categories Costs\nCAP [tech,infrastruct,node] MW Capacity\nGEN [sector,tech,t,k,node] MW Generation\nSLACK [sector,t,k,node] MW Power gap, not provided by installed CAP\nLL [sector] MWh LoastLoad Generation gap, not provided by installed CAP\nLE [impact] LCA-categories LoastEmission Amount of emissions that installed CAP crosses the Emission constraint\nINTRASTOR [sector, tech,t,k,node] MWh Storage level within a period\nINTERSTOR [sector,tech,i,node] MWh Storage level between periods of the full time series\nFLOW [sector,dir,tech,t,k,line] MW Flow over transmission line\nTRANS [tech,infrastruct,lines] MW maximum capacity of transmission lines"
},

{
    "location": "opt_cep/#CEP.run_opt",
    "page": "Optimization Capacity Expansion Problem",
    "title": "CEP.run_opt",
    "category": "function",
    "text": "run_opt(ts_data::ClustData,opt_data::OptDataCEP,opt_config::Dict{String,Any};optimizer::DataType)\n\norganizing the actual setup and run of the CEP-Problem\n\n\n\n\n\n run_opt(ts_data::ClustData,opt_data::OptDataCEP,opt_config::Dict{String,Any},fixed_design_variables::Dict{String,Any},optimizer::DataTyple;lost_el_load_cost::Number=Inf,lost_CO2_emission_cost::Number)\n\nWrapper function for type of optimization problem for the CEP-Problem (NOTE: identifier is the type of opt_data - in this case OptDataCEP - so identification as CEP problem) This problem runs the operational optimization problem only, with fixed design variables. provide the fixed design variables and the opt_config of the previous step (design run or another opterational run) what you can add to the opt_config:\n\nlost_el_load_cost: Number indicating the lost load price/MWh (should be greater than 1e6),   give Inf for none\nlost_CO2_emission_cost: Number indicating the emission price/kg-CO2 (should be greater than 1e6), give Inf for none\ngive Inf for both lost_cost for no slack\n\n\n\n\n\n run_opt(ts_data::ClustData,opt_data::OptDataCEP,optimizer::DataTyple;descriptor::String=\"\",co2_limit::Number=Inf,lost_el_load_cost::Number=Inf,lost_CO2_emission_cost::Number=Inf,existing_infrastructure::Bool=false,limit_infrastructure::Bool=false,storage::String=\"none\",transmission::Bool=false,print_flag::Bool=true,print_level::Int64=0)\n\nWrapper function for type of optimization problem for the CEP-Problem (NOTE: identifier is the type of opt_data - in this case OptDataCEP - so identification as CEP problem) options to tweak the model are:\n\ndescritor: String with the name of this paricular model like \"kmeans-10-co2-500\"\nco2_limit: A number limiting the kg.-CO2-eq./MWh (normally in a range from 5-1250 kg-CO2-eq/MWh), give Inf or no kw if unlimited\nlost_el_load_cost: Number indicating the lost load price/MWh (should be greater than 1e6),   give Inf for none\nlost_CO2_emission_cost:\nNumber indicating the emission price/kg-CO2 (should be greater than 1e6), give Inf for none\ngive Inf for both lost_cost for no slack\nexisting_infrastructure: true or false to include or exclude existing infrastructure to the model\nstorage: String \"none\" for no storage or \"simple\" to include simple (only intra-day storage) or \"seasonal\" to include seasonal storage (inter-day)\n\n\n\n\n\n"
},

{
    "location": "opt_cep/#Running-the-Capacity-Expansion-Problem-1",
    "page": "Optimization Capacity Expansion Problem",
    "title": "Running the Capacity Expansion Problem",
    "category": "section",
    "text": "note: Note\nThe CEP model can be run with many configurations. The configurations themselves don\'t mess with each other though the provided input data must fulfill the ability to have e.g. lines in order for transmission to work.An overview is provided in the following table:description unit configuration values type default value\nenforce a CO2-limit kg-CO2-eq./MW co2_limit >0 ::Number Inf\nincluding existing infrastructure (no extra costs) - existing_infrastructure true or false ::Bool false\ntype of storage implementation - storage \"none\", \"simple\" or \"seasonal\" ::String \"none\"\nallowing transmission - transmission true or false ::Bool false\nfix. var and CEO to dispatch problem - fixeddesignvariables design variables from design run or nothing ::OptVariables nothing\nallowing lost load (necessary for dispatch) price/MWh lostelload_cost >1e6 ::Number Inf\nallowing lost emission (necessary for dispatch) price/kg_CO2-eq. lostCO2emission_cost >700 ::Number InfThey can be applied in the following way:run_opt"
},

{
    "location": "opt_cep/#CEP.OptResult",
    "page": "Optimization Capacity Expansion Problem",
    "title": "CEP.OptResult",
    "category": "type",
    "text": "OptResult\n\n\n\n\n\n"
},

{
    "location": "opt_cep/#Opt-Result-A-closer-look-1",
    "page": "Optimization Capacity Expansion Problem",
    "title": "Opt Result - A closer look",
    "category": "section",
    "text": "OptResultnote: Note\nThe model tracks how it is setup and which equations are used. This can help you to understand the models exact configuration without looking up the source code.The information of the model setup can be checked out the following way:using CEP\nusing Clp\noptimizer=Clp.Optimizer\nstate=\"GER_1\"\nyears=[2016]\nts_input_data = load_timeseries_data_provided(state;T=24, years=years)\ncep_data = load_cep_data_provided(state)\n## CLUSTERING ##\nts_clust_data = run_clust(ts_input_data;method=\"kmeans\",representation=\"centroid\",n_init=10,n_clust=5).best_resultsresult = run_opt(ts_clust_data,cep_data,optimizer;descriptor=\"Model Name\")\nresult.opt_info[\"model\"]"
},

{
    "location": "opt_cep_examples/#",
    "page": "Examples",
    "title": "Examples",
    "category": "page",
    "text": ""
},

{
    "location": "opt_cep_examples/#Examples-1",
    "page": "Examples",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "opt_cep_examples/#CO2-Limitation-1",
    "page": "Examples",
    "title": "CO2-Limitation",
    "category": "section",
    "text": "using CEP\nusing Clp\noptimizer=Clp.Optimizer #select an Optimize\nstate=\"GER_1\" #select state\nts_input_data = load_timeseries_data_provided(state; K=365, T=24)\ncep_data = load_cep_data_provided(state)\nts_clust_data = run_clust(ts_input_data;method=\"kmeans\",representation=\"centroid\",n_init=5,n_clust=5).best_results\n# tweak the CO2 level\nco2_result = run_opt(ts_clust_data,cep_data,optimizer;descriptor=\"co2\",co2_limit=500)"
},

{
    "location": "opt_cep_examples/#Slack-variables-included-1",
    "page": "Examples",
    "title": "Slack variables included",
    "category": "section",
    "text": "slack_result = run_opt(ts_clust_data,cep_data,optimizer;descriptor=\"slack\",lost_el_load_cost=1e6, lost_CO2_emission_cost=700)"
},

{
    "location": "opt_cep_examples/#Simple-storage-1",
    "page": "Examples",
    "title": "Simple storage",
    "category": "section",
    "text": "note: Note\nIn simple or intradaystorage the storage level is enforced to be the same at the beginning and end of each day. The variable \'INTRASTORAGE\' is tracking the storage level within each day of the representative periods.simplestor_result = run_opt(ts_clust_data,cep_data,optimizer;descriptor=\"simple storage\",storage=\"simple\")"
},

{
    "location": "opt_cep_examples/#Seasonal-storage-1",
    "page": "Examples",
    "title": "Seasonal storage",
    "category": "section",
    "text": "note: Note\nIn seasonalstorage the storage level is enforced to be the same at the beginning and end of the original time-series. The new variable \'INTERSTORAGE\' tracks the storage level throughout the days (or periods) of the original time-series. The variable \'INTRASTORAGE\' is tracking the storage level within each day of the representative periods.seasonalstor_result = run_opt(ts_clust_data,cep_data,optimizer;descriptor=\"seasonal storage\",storage=\"seasonal\")"
},

{
    "location": "opt_cep_examples/#Second-stage-operational-validation-step-1",
    "page": "Examples",
    "title": "Second stage operational validation step",
    "category": "section",
    "text": "design_result = run_opt(ts_clust_data,cep_data,optimizer;descriptor=\"design&operation\", co2_limit=50)\n#the design variables (here the capacity_factors) are calculated from the first optimization\ndesign_variables=get_cep_design_variables(design_result)\n# Use the design variable results for the operational (dispatch problem) run\noperation_result = run_opt(ts_input_data,cep_data,design_result.opt_config,design_variables,optimizer;lost_el_load_cost=1e6,lost_CO2_emission_cost=700)"
},

{
    "location": "opt_cep_examples/#CEP.get_cep_variable_set",
    "page": "Examples",
    "title": "CEP.get_cep_variable_set",
    "category": "function",
    "text": "get_cep_variable_set(variable::OptVariable,num_index_set::Int)\n\nGet the variable set from the specific variable and the num_index_set like 1\n\n\n\n\n\nget_cep_variable_set(scenario::Scenario,var_name::String,num_index_set::Int)\n\nGet the variable set from the specific Scenario by indicating the var_name e.g. \"COST\" and the num_index_set like 1\n\n\n\n\n\n"
},

{
    "location": "opt_cep_examples/#CEP.get_cep_slack_variables",
    "page": "Examples",
    "title": "CEP.get_cep_slack_variables",
    "category": "function",
    "text": "get_cep_slack_variables(opt_result::OptResult)\n\nReturns all slack variables in this opt_result mathing the type \"sv\"\n\n\n\n\n\n"
},

{
    "location": "opt_cep_examples/#CEP.get_cep_design_variables",
    "page": "Examples",
    "title": "CEP.get_cep_design_variables",
    "category": "function",
    "text": "get_cep_design_variables(opt_result::OptResult; capacity_factors::Dict{String,Number}=Dict{String,Number}())\n\nReturns all design variables in this opt_result matching the type \"dv\" Additionally you can add capacity factors, which scale the design variables by multiplying it with the value in the Dict\n\n\n\n\n\n"
},

{
    "location": "opt_cep_examples/#Get-Functions-1",
    "page": "Examples",
    "title": "Get Functions",
    "category": "section",
    "text": "The get functions allow an easy access to the information included in the result.get_cep_variable_set\nget_cep_slack_variables\nget_cep_design_variables"
},

{
    "location": "opt_cep_examples/#Plotting-Capacities-1",
    "page": "Examples",
    "title": "Plotting Capacities",
    "category": "section",
    "text": "using CEP\nusing Clp\noptimizer=Clp.Optimizer\n\nts_input_data = load_timeseries_data_provided(state; K=365, T=24)\ncep_data = load_cep_data_provided(state)\nts_clust_data = run_clust(ts_input_data;method=\"kmeans\",representation=\"centroid\",n_init=5,n_clust=5).best_resultsco2_result = run_opt(ts_clust_data,cep_data,optimizer;descriptor=\"co2\",co2_limit=500) #hide\n\nusing Plots\n# use the get variable set in order to get the labels: indicate the variable as \"CAP\" and the set-number as 1 to receive those set values\nvariable=co2_result.variables[\"CAP\"]\nlabels=axes(variable,\"tech\")\n\ndata=variable,[:,:,\"germany\"]\n# use the data provided for a simple bar-plot without a legend\nsavefig(bar(data,title=\"Cap\", xticks=(1:length(labels),labels),legend=false), \"cap_plot.svg\"); nothing(Image: Plot)"
},

]}
