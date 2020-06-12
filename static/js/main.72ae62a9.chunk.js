(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[0],{254:function(e,t,a){e.exports=a(468)},259:function(e,t,a){},468:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),o=a.n(c),i=(a(259),a(25)),l=a(26),u=a(28),s=a(27),m=a(514),d=a(218),p=a(16),h=a(505),y=a(470),v=a(509);var E=Object(v.a)((function(e){return{topbar_wrapper:{backgroundColor:e.palette.theme.main,color:"white",textAlign:"center",padding:"20px"}}})),f=function(){var e=E();return n.a.createElement("div",{className:e.topbar_wrapper},n.a.createElement(h.a,{container:!0},n.a.createElement(h.a,{item:!0,xs:12},n.a.createElement(y.a,{variant:"h3"},"Coronavirus Summary"))))},S=a(219),g=a(517),b={primary:{contrastText:"#FFFFFF",dark:"#003159",main:"#003159",light:"#003159"},theme:{contrastText:"#FFFFFF",dark:"#003159",main:"#003159",light:"#003159"}},C={body1:{color:b.theme.main},body2:{color:b.theme.main}},D={MuiPaper:{root:{height:"100%"}}},w=Object(S.a)({overrides:D,palette:b,typography:C}),O=w=Object(g.a)(w),j=a(515),x=a(7),N=a(217),k=a.n(N),T=a(513),_=a(58),F=a.n(_),W=a(516),I=a(510),A=a(511),R=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={country:r.props.countryDetails},r}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){e.countryDetails.Country!==this.props.countryDetails.Country&&this.setState({country:this.props.countryDetails})}},{key:"render",value:function(){var e=this.props.classes,t=this.props.countryDetails,a=t.TotalConfirmed-t.TotalRecovered-t.TotalDeaths;return n.a.createElement(h.a,{container:!0,item:!0,spacing:2},n.a.createElement(h.a,{item:!0,xs:12},n.a.createElement(y.a,{variant:"h5"},"Summary of cases in ",t.Country),n.a.createElement(y.a,{variant:"body1"},"last updated: ",function(){var e=new Date(t.Date);return"".concat(e.getDate(),"-").concat(e.toLocaleString("default",{month:"long"}),"-").concat(e.getFullYear())}())),n.a.createElement(h.a,{container:!0,item:!0,xs:12,spacing:1,className:e.cd_grid_wrapper},n.a.createElement(h.a,{item:!0,xs:12,sm:6,md:3},n.a.createElement(I.a,{variant:"outlined",className:e.CardStyles},n.a.createElement(A.a,null,n.a.createElement(y.a,{variant:"h6"},"Total Confirmed"),n.a.createElement(y.a,{variant:"h6"},t.TotalConfirmed)))),n.a.createElement(h.a,{item:!0,xs:12,sm:6,md:3},n.a.createElement(I.a,{variant:"outlined",className:e.CardStyles},n.a.createElement(A.a,null,n.a.createElement(y.a,{variant:"h6"},"Active Cases"),n.a.createElement(y.a,{variant:"h6"},a)))),n.a.createElement(h.a,{item:!0,xs:12,sm:6,md:3},n.a.createElement(I.a,{variant:"outlined",className:e.CardStyles},n.a.createElement(A.a,null,n.a.createElement(y.a,{variant:"h6"},"Total Recovered"),n.a.createElement(y.a,{variant:"h6"},t.TotalRecovered)))),n.a.createElement(h.a,{item:!0,xs:12,sm:6,md:3},n.a.createElement(I.a,{variant:"outlined",className:e.CardStyles},n.a.createElement(A.a,null,n.a.createElement(y.a,{variant:"h6"},"Total Deaths"),n.a.createElement(y.a,{variant:"h6"},t.TotalDeaths))))))}}]),a}(r.Component),L=Object(x.a)({countryDetails_Wrapper:{width:"100%"},CardStyles:{width:"100%"},cd_grid_wrapper:{width:"100%",margin:"0 auto"}})(R),K=a(471),P=a(30),z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).retrieveDailyData=function(e){var t="https://api.covid19api.com/total/country/".concat(e);F.a.get(t).then((function(e){var t=e.data;t.map((function(e){return e.Date=r.getFormattedDate(new Date(e.Date)),e})),r.setState({data:t},(function(){r.setState({apiError:!1})}))})).catch(r.setState({apiError:!0}))},r.getFormattedDate=function(e){return"".concat(e.getDate(),"-").concat(e.toLocaleString("default",{month:"long"}).slice(0,3))},r.state={countryName:r.props.countryName,data:[],apiError:!1},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveDailyData(this.state.countryName,this.state.countryStatus)}},{key:"componentDidUpdate",value:function(e){var t=this;e.countryName!==this.props.countryName&&this.setState({countryName:this.props.countryName},(function(){t.retrieveDailyData(t.state.countryName)}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(K.a,null,n.a.createElement(y.a,{variant:"h6"},"OVERALL CASES"),n.a.createElement(P.e,{width:"100%",height:400},n.a.createElement(P.d,{label:"hello",data:this.state.data},n.a.createElement(P.c,{strokeWidth:2,type:"monotone",dataKey:"Confirmed",dot:!1,stroke:"#032357"}),n.a.createElement(P.c,{strokeWidth:2,type:"monotone",dataKey:"Recovered",dot:!1,stroke:"#056349"}),n.a.createElement(P.c,{strokeWidth:2,type:"monotone",dataKey:"Deaths",dot:!1,stroke:"#8a0e03"}),n.a.createElement(P.c,{strokeWidth:2,type:"monotone",dataKey:"Active",dot:!1,stroke:"#6b3b53"}),n.a.createElement(P.a,{strokeDasharray:"3 3"}),n.a.createElement(P.f,null),n.a.createElement(P.g,{dataKey:"Date"}),n.a.createElement(P.h,null),n.a.createElement(P.b,null)))))}}]),a}(r.Component),M=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={country:r.props.country},r}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){e.country.Country!==this.props.country.Country&&this.setState({country:this.props.country})}},{key:"render",value:function(){var e=this.state.country,t=this.props.classes;return n.a.createElement("div",{className:t.countrySummary_wrapper},n.a.createElement(h.a,{container:!0,spacing:3,className:t.c_grid_wrapper},n.a.createElement(h.a,{container:!0,item:!0,xs:12},n.a.createElement(L,{countryDetails:e})),n.a.createElement(h.a,{item:!0,xs:12},n.a.createElement(z,{countryName:this.state.country.Slug}))))}}]),a}(r.Component),U=Object(x.a)({countrySummary_wrapper:{padding:"40px 0",height:"100%",textAlign:"center"},c_grid_wrapper:{width:"100%",margin:"0 auto"}})(M),V=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){r.getCovidSummary()},r.changeSearch=function(e,t){r.setState({searchInput:t},(function(){var e=r.state.covidSummaryCountries.filter((function(e){return e.Country===r.state.searchInput}))[0];"undefined"!==typeof e?(r.setState({countrySelected:e}),r.setState({countrySelectedName:e.Country}),r.props.history.push("/covid-dashboard/".concat(e.Country))):r.setState({countrySelected:{}})}))},r.submitSearch=function(e){e.preventDefault()},r.getCovidSummary=function(){F.a.get("https://api.covid19api.com/summary").then((function(e){r.setState({covidSummaryCountries:e.data.Countries},(function(){var e=r.state.covidSummaryCountries.filter((function(e){return e.Country.toLowerCase()===r.state.countrySelectedName.toLowerCase()}));1===e.length&&(r.setState({countrySelectedName:e[0].Country}),r.setState({countrySelected:e[0]}))}))}),(function(e){r.setState({apiError:!0})}))},r.state={searchInput:"",covidSummaryCountries:[],apiError:!1,countrySelected:{},countrySelectedName:e.country||""},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return n.a.createElement("div",{className:t.searchWrapper},n.a.createElement(y.a,{variant:"h4"},"Search by Country name"),n.a.createElement(W.a,{className:t.autocompleteSearchInput,options:this.state.covidSummaryCountries,getOptionLabel:function(e){return e.Country},onInputChange:this.changeSearch,renderInput:function(a){return a.InputProps.startAdornment=n.a.createElement(T.a,{position:"start"},n.a.createElement(k.a,{style:{paddingRight:"5px"}}),n.a.createElement(y.a,{variant:"h5"},"   Country: ")),a.InputProps.className=t.resizeTextField,a.inputProps.value=e.state.countrySelectedName,n.a.createElement(j.a,a)}}),!function(e){var t=Object.prototype.hasOwnProperty;if(null==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;if("object"!==typeof e)return!0;for(var a in e)if(t.call(e,a))return!1;return!0}(this.state.countrySelected)&&!this.state.apiError&&n.a.createElement(U,{country:this.state.countrySelected}))}}]),a}(r.Component),B=Object(x.a)((function(e){return{searchWrapper:{textAlign:"center"},autocompleteSearchInput:{width:"50%",minWidth:"300px",margin:"30px auto 0px"},resizeTextField:{fontSize:e.typography.h6.fontSize}}}))(V);var J=Object(v.a)((function(e){return{SearchCountryView:{padding:"40px"}}})),Y=function(e){var t=J();return n.a.createElement("div",{className:t.SearchCountryView},n.a.createElement(B,{country:e.match.params.country,history:e.history}))},q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={worldSummaryData:{},apiError:!1},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.a.get("https://api.covid19api.com/world/total").then((function(t){e.setState({worldSummaryData:t.data},(function(){e.setState({apiError:!1})}))})).catch((function(){e.setState({apiError:!0})}))}},{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.worldSummary_Wrapper},n.a.createElement(y.a,{variant:"h4",className:e.header_margin},"World Overview"),n.a.createElement(h.a,{container:!0,spacing:2,className:e.grid_wrapper},n.a.createElement(h.a,{item:!0,xs:12,sm:4},n.a.createElement(I.a,{variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(y.a,{variant:"h6"},"Total Confirmed"),n.a.createElement(y.a,{variant:"h6"},this.state.worldSummaryData.TotalConfirmed)))),n.a.createElement(h.a,{item:!0,xs:12,sm:4},n.a.createElement(I.a,{variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(y.a,{variant:"h6"},"Total Recovered"),n.a.createElement(y.a,{variant:"h6"},this.state.worldSummaryData.TotalRecovered)))),n.a.createElement(h.a,{item:!0,xs:12,sm:4},n.a.createElement(I.a,{variant:"outlined"},n.a.createElement(A.a,null,n.a.createElement(y.a,{variant:"h6"},"Total Deaths"),n.a.createElement(y.a,{variant:"h6"},this.state.worldSummaryData.TotalDeaths))))))}}]),a}(r.Component),G=Object(x.a)({worldSummary_Wrapper:{textAlign:"center",width:"100%"},grid_wrapper:{width:"100%",margin:"0 auto"},header_margin:{marginBottom:"20px"}})(q);var H=function(){return n.a.createElement("div",null,n.a.createElement(G,null))},Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,{theme:O},n.a.createElement(f,null),n.a.createElement(d.a,null,n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/covid-dashboard/:country",component:Y}),n.a.createElement(p.a,{path:"/covid-dashboard",component:Y}))),n.a.createElement(H,null))}}]),a}(r.Component);o.a.render(n.a.createElement(Q,null),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.72ae62a9.chunk.js.map