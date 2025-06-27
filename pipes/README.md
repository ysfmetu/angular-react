PİPES

text pipes :
text ifadeleri şekillendirmemize yarar
<h4>{{title}}</h4> normal haliyle ekrana basmamıza yarar
<h4>{{title | titlecase}}</h4><!--ilk harfini büyük yapar-->
<h4>{{title | uppercase}}</h4><!--tamamını büyük yapar-->
<h4>{{title | lowercase}}</h4><!--hepsini küçük yapar-->

date pipes

<h4>{{myDate}}</h4>   :Fri Jun 24 2022 14:19:28 GMT+0300 (GMT+03:00)
<h4>{{myDate | date :'dd-MM-yyyy'}}</h4> :24-06-2022
<h4>{{myDate | date :'shortDate'}}</h4>  :6/24/22
<h4>{{myDate | date :'mediumDate'}}</h4> :Jun 24, 2022
<h4>{{myDate | date :'fullDate'}}</h4>   :Friday, June 24, 2022

json pipe //javascript object leri stringe çeviririr

<h4>{{myObj|json}}</h4>

--currency--
{{ product.price | currency:'\u20BA':"symbol":"2.2-2" }}
tl olarak sembol ekler
