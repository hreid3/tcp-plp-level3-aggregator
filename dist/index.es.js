import{__generator as e,__assign as t}from"tslib";import r from"axios";function a(e){return new Promise(function(t,r){function a(n,c){try{var u=e[c?"throw":"next"](n)}catch(e){return void r(e)}u.done?t(u.value):Promise.resolve(u.value).then(a,s)}function s(e){a(e,1)}a()})}var s=function(s){return a(function(){var a,n,c,u,o;return e(this,function(e){switch(e.label){case 0:a={},e.label=1;case 1:return e.trys.push([1,3,,4]),n={"facet.multilevel":"categoryPath","f.categoryPath.nameId":"true","f.categoryPath.max.depth":4},c=t({},s.parameters,n,{start:0,rows:0,fields:"alt_img","p-id":'categoryPathId:"'+s.categoryPathL2+'"'}),[4,r.get(s.unbxdBase+"/category",{headers:s.headers,params:c})];case 2:return(u=e.sent())&&u.data&&u.data.facets&&u.data.facets.multilevel&&u.data.facets.multilevel.bucket&&u.data.facets.multilevel.bucket.length&&u.data.facets.multilevel.bucket.forEach(function(e){e.values.forEach(function(e){var t=e.id,r=e.count;a[t]=r})}),[3,4];case 3:return o=e.sent(),[2,Promise.reject(o)];case 4:return[2,Promise.resolve(a)]}})}())},n=function(n){return new Promise(function(c,u){return a(function(){var a,o,l,i,d,f,h,m,p,v,g,y,b,P,w,x,k,I,L,j;return e(this,function(e){switch(e.label){case 0:return e.trys.push([0,7,,8]),o=n.parameters,l=o.start,i=o.rows,d=l+i,f=0,h=null,m=!1,p=0,v=0,g=i,[4,s(n)];case 1:y=e.sent(),b=Object.keys(y).reduce(function(e,t){return e+y[t]},0),P=0,w=n.categoryIdsL3,e.label=2;case 2:return P<w.length?(x=w[P],(k=y[x])+f>l?(p=0,m?v=k<g?k:g:(f=k-(v=k-(p=k-(k+f-l))<g?k-p:g)-p,m=!0),[4,r.get(n.unbxdBase+"/category",{headers:n.headers,params:t({},n.parameters,{"p-id":'categoryPathId:"'+n.categoryPathL2+">"+x+'"',start:p,rows:v})})]):[3,4]):[3,6];case 3:I=e.sent(),h?(L=function(e){return e&&e.data&&e.data.response}(h),(a=L.products).push.apply(a,I.data.response.products)):h=I,g-=v,e.label=4;case 4:if((f+=k)>=d||!g)return[3,6];e.label=5;case 5:return P++,[3,2];case 6:return h&&(h.data.response.numberOfProducts=b),c(h),[3,8];case 7:return j=e.sent(),u(j),[3,8];case 8:return[2]}})}())})};export default n;export{n as fetchL3Categories};
