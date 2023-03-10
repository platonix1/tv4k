import SmallProduct from "./components/SmallProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap/';

const products = [
  {
    "id" : "1",
    "model" : "50NE6900",
    "brand" : "NEI",
    "size" : "127",
    "resolution" : "4K",
    "price" : 1349.99,
    "display" : "LED",
    "shortDescription" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm.",
    "description" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm. Vizionați filme, emisiuni, transmisiuni sportive și multe altele la o rezoluție maximă, care vă va duce în mijlocul acțiunii. /n Marca NEI este prezentă în România din 1993 și este cunoscută pentru calitatea și prețurile convenabile ale produselor sale. Televizorul LED NEI 50NE6900 este o dovadă a angajamentului lor de a aduce cele mai noi tehnologii la dispoziția tuturor. /n Cu ajutorul funcției Smart, accesați rapid și ușor conținutul preferat direct de pe televizor, fără cabluri sau setări complicate. Conectați dispozitivele mobile și navigați pe internet în mod confortabil și fără probleme. /n Interfața CI+ vă permite să scăpați de telecomanda suplimentară pentru TV Box-ul oferit de operatorul dvs. de cablu și să controlați canalele TV direct de pe telecomanda televizorului NEI. /n Experimentați cea mai bună calitate a imaginii și sunetului în confortul casei dumneavoastră cu televizorul LED NEI 50NE6900, care va aduna întreaga familie pentru a se bucura de filme, emisiuni și momente speciale înregistrate cu camera foto sau video. /n Conectați-vă cu ușurință la dispozitivele dvs. cu interfața 2 x USB, 1 x RJ-45, 3 x HDMI, CI+ slot și 2 x RF. /n Cu caracteristicile audio Stereo, sistem audio 2 și puterea difuzoarelor integrate de 8W, sunetul va fi la fel de clar și plin de viață ca și imaginea. /n Cu un consum de energie electrică de 120 W și consum de energie electrică de 85 kWh/1000 de ore, televizorul NEI 50NE6900 este eficient din punct de vedere energetic. /n Conectați-vă la internet wireless cu ajutorul funcției Wi-Fi pentru a accesa conținutul online preferat.",
    "image" : "50NE6900.jpg",
    "url" : "https://www.emag.ro/televizor-led-nei-127-cm-smart-4k-ultra-hd-clasa-g-50ne6900/pd/DYN3CRMBM/",
    "stock" : true,
},
{
  "id" : "2",
  "model" : "32NE4900",
  "brand" : "NEI",
  "size" : "80",
  "resolution" : "HD",
  "price" : 662.62,
  "display" : "LED",
  "shortDescription" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm.",
  "description" : "Lorem ipsum aia e",
  "image" : "32NE4900.jpg",
  "url" : "https://www.emag.ro/televizor-led-nei-127-cm-smart-4k-ultra-hd-clasa-g-50ne6900/pd/DYN3CRMBM/",
  "stock" : true,
},
{
  "id" : "1",
  "model" : "50NE6900",
  "brand" : "NEI",
  "size" : "127",
  "resolution" : "4K",
  "price" : 1349.99,
  "display" : "LED",
  "shortDescription" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm.",
  "description" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm. Vizionați filme, emisiuni, transmisiuni sportive și multe altele la o rezoluție maximă, care vă va duce în mijlocul acțiunii. /n Marca NEI este prezentă în România din 1993 și este cunoscută pentru calitatea și prețurile convenabile ale produselor sale. Televizorul LED NEI 50NE6900 este o dovadă a angajamentului lor de a aduce cele mai noi tehnologii la dispoziția tuturor. /n Cu ajutorul funcției Smart, accesați rapid și ușor conținutul preferat direct de pe televizor, fără cabluri sau setări complicate. Conectați dispozitivele mobile și navigați pe internet în mod confortabil și fără probleme. /n Interfața CI+ vă permite să scăpați de telecomanda suplimentară pentru TV Box-ul oferit de operatorul dvs. de cablu și să controlați canalele TV direct de pe telecomanda televizorului NEI. /n Experimentați cea mai bună calitate a imaginii și sunetului în confortul casei dumneavoastră cu televizorul LED NEI 50NE6900, care va aduna întreaga familie pentru a se bucura de filme, emisiuni și momente speciale înregistrate cu camera foto sau video. /n Conectați-vă cu ușurință la dispozitivele dvs. cu interfața 2 x USB, 1 x RJ-45, 3 x HDMI, CI+ slot și 2 x RF. /n Cu caracteristicile audio Stereo, sistem audio 2 și puterea difuzoarelor integrate de 8W, sunetul va fi la fel de clar și plin de viață ca și imaginea. /n Cu un consum de energie electrică de 120 W și consum de energie electrică de 85 kWh/1000 de ore, televizorul NEI 50NE6900 este eficient din punct de vedere energetic. /n Conectați-vă la internet wireless cu ajutorul funcției Wi-Fi pentru a accesa conținutul online preferat.",
  "image" : "50NE6900.jpg",
  "url" : "https://www.emag.ro/televizor-led-nei-127-cm-smart-4k-ultra-hd-clasa-g-50ne6900/pd/DYN3CRMBM/",
  "stock" : true,
},
{
  "id" : "1",
  "model" : "50NE6900",
  "brand" : "NEI",
  "size" : "127",
  "resolution" : "4K",
  "price" : 1349.99,
  "display" : "LED",
  "shortDescription" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm.",
  "description" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm. Vizionați filme, emisiuni, transmisiuni sportive și multe altele la o rezoluție maximă, care vă va duce în mijlocul acțiunii. /n Marca NEI este prezentă în România din 1993 și este cunoscută pentru calitatea și prețurile convenabile ale produselor sale. Televizorul LED NEI 50NE6900 este o dovadă a angajamentului lor de a aduce cele mai noi tehnologii la dispoziția tuturor. /n Cu ajutorul funcției Smart, accesați rapid și ușor conținutul preferat direct de pe televizor, fără cabluri sau setări complicate. Conectați dispozitivele mobile și navigați pe internet în mod confortabil și fără probleme. /n Interfața CI+ vă permite să scăpați de telecomanda suplimentară pentru TV Box-ul oferit de operatorul dvs. de cablu și să controlați canalele TV direct de pe telecomanda televizorului NEI. /n Experimentați cea mai bună calitate a imaginii și sunetului în confortul casei dumneavoastră cu televizorul LED NEI 50NE6900, care va aduna întreaga familie pentru a se bucura de filme, emisiuni și momente speciale înregistrate cu camera foto sau video. /n Conectați-vă cu ușurință la dispozitivele dvs. cu interfața 2 x USB, 1 x RJ-45, 3 x HDMI, CI+ slot și 2 x RF. /n Cu caracteristicile audio Stereo, sistem audio 2 și puterea difuzoarelor integrate de 8W, sunetul va fi la fel de clar și plin de viață ca și imaginea. /n Cu un consum de energie electrică de 120 W și consum de energie electrică de 85 kWh/1000 de ore, televizorul NEI 50NE6900 este eficient din punct de vedere energetic. /n Conectați-vă la internet wireless cu ajutorul funcției Wi-Fi pentru a accesa conținutul online preferat.",
  "image" : "50NE6900.jpg",
  "url" : "https://www.emag.ro/televizor-led-nei-127-cm-smart-4k-ultra-hd-clasa-g-50ne6900/pd/DYN3CRMBM/",
  "stock" : true,
},
{
  "id" : "1",
  "model" : "50NE6900",
  "brand" : "NEI",
  "size" : "127",
  "resolution" : "4K",
  "price" : 1349.99,
  "display" : "LED",
  "shortDescription" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm.",
  "description" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm. Vizionați filme, emisiuni, transmisiuni sportive și multe altele la o rezoluție maximă, care vă va duce în mijlocul acțiunii. /n Marca NEI este prezentă în România din 1993 și este cunoscută pentru calitatea și prețurile convenabile ale produselor sale. Televizorul LED NEI 50NE6900 este o dovadă a angajamentului lor de a aduce cele mai noi tehnologii la dispoziția tuturor. /n Cu ajutorul funcției Smart, accesați rapid și ușor conținutul preferat direct de pe televizor, fără cabluri sau setări complicate. Conectați dispozitivele mobile și navigați pe internet în mod confortabil și fără probleme. /n Interfața CI+ vă permite să scăpați de telecomanda suplimentară pentru TV Box-ul oferit de operatorul dvs. de cablu și să controlați canalele TV direct de pe telecomanda televizorului NEI. /n Experimentați cea mai bună calitate a imaginii și sunetului în confortul casei dumneavoastră cu televizorul LED NEI 50NE6900, care va aduna întreaga familie pentru a se bucura de filme, emisiuni și momente speciale înregistrate cu camera foto sau video. /n Conectați-vă cu ușurință la dispozitivele dvs. cu interfața 2 x USB, 1 x RJ-45, 3 x HDMI, CI+ slot și 2 x RF. /n Cu caracteristicile audio Stereo, sistem audio 2 și puterea difuzoarelor integrate de 8W, sunetul va fi la fel de clar și plin de viață ca și imaginea. /n Cu un consum de energie electrică de 120 W și consum de energie electrică de 85 kWh/1000 de ore, televizorul NEI 50NE6900 este eficient din punct de vedere energetic. /n Conectați-vă la internet wireless cu ajutorul funcției Wi-Fi pentru a accesa conținutul online preferat.",
  "image" : "50NE6900.jpg",
  "url" : "https://www.emag.ro/televizor-led-nei-127-cm-smart-4k-ultra-hd-clasa-g-50ne6900/pd/DYN3CRMBM/",
  "stock" : true,
},
{
  "id" : "1",
  "model" : "50NE6900",
  "brand" : "NEI",
  "size" : "127",
  "resolution" : "4K",
  "price" : 1349.99,
  "display" : "LED",
  "shortDescription" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm.",
  "description" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm. Vizionați filme, emisiuni, transmisiuni sportive și multe altele la o rezoluție maximă, care vă va duce în mijlocul acțiunii. /n Marca NEI este prezentă în România din 1993 și este cunoscută pentru calitatea și prețurile convenabile ale produselor sale. Televizorul LED NEI 50NE6900 este o dovadă a angajamentului lor de a aduce cele mai noi tehnologii la dispoziția tuturor. /n Cu ajutorul funcției Smart, accesați rapid și ușor conținutul preferat direct de pe televizor, fără cabluri sau setări complicate. Conectați dispozitivele mobile și navigați pe internet în mod confortabil și fără probleme. /n Interfața CI+ vă permite să scăpați de telecomanda suplimentară pentru TV Box-ul oferit de operatorul dvs. de cablu și să controlați canalele TV direct de pe telecomanda televizorului NEI. /n Experimentați cea mai bună calitate a imaginii și sunetului în confortul casei dumneavoastră cu televizorul LED NEI 50NE6900, care va aduna întreaga familie pentru a se bucura de filme, emisiuni și momente speciale înregistrate cu camera foto sau video. /n Conectați-vă cu ușurință la dispozitivele dvs. cu interfața 2 x USB, 1 x RJ-45, 3 x HDMI, CI+ slot și 2 x RF. /n Cu caracteristicile audio Stereo, sistem audio 2 și puterea difuzoarelor integrate de 8W, sunetul va fi la fel de clar și plin de viață ca și imaginea. /n Cu un consum de energie electrică de 120 W și consum de energie electrică de 85 kWh/1000 de ore, televizorul NEI 50NE6900 este eficient din punct de vedere energetic. /n Conectați-vă la internet wireless cu ajutorul funcției Wi-Fi pentru a accesa conținutul online preferat.",
  "image" : "50NE6900.jpg",
  "url" : "https://www.emag.ro/televizor-led-nei-127-cm-smart-4k-ultra-hd-clasa-g-50ne6900/pd/DYN3CRMBM/",
  "stock" : true,
},
{
  "id" : "1",
  "model" : "50NE6900",
  "brand" : "NEI",
  "size" : "127",
  "resolution" : "4K",
  "price" : 1349.99,
  "display" : "LED",
  "shortDescription" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm.",
  "description" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm. Vizionați filme, emisiuni, transmisiuni sportive și multe altele la o rezoluție maximă, care vă va duce în mijlocul acțiunii. /n Marca NEI este prezentă în România din 1993 și este cunoscută pentru calitatea și prețurile convenabile ale produselor sale. Televizorul LED NEI 50NE6900 este o dovadă a angajamentului lor de a aduce cele mai noi tehnologii la dispoziția tuturor. /n Cu ajutorul funcției Smart, accesați rapid și ușor conținutul preferat direct de pe televizor, fără cabluri sau setări complicate. Conectați dispozitivele mobile și navigați pe internet în mod confortabil și fără probleme. /n Interfața CI+ vă permite să scăpați de telecomanda suplimentară pentru TV Box-ul oferit de operatorul dvs. de cablu și să controlați canalele TV direct de pe telecomanda televizorului NEI. /n Experimentați cea mai bună calitate a imaginii și sunetului în confortul casei dumneavoastră cu televizorul LED NEI 50NE6900, care va aduna întreaga familie pentru a se bucura de filme, emisiuni și momente speciale înregistrate cu camera foto sau video. /n Conectați-vă cu ușurință la dispozitivele dvs. cu interfața 2 x USB, 1 x RJ-45, 3 x HDMI, CI+ slot și 2 x RF. /n Cu caracteristicile audio Stereo, sistem audio 2 și puterea difuzoarelor integrate de 8W, sunetul va fi la fel de clar și plin de viață ca și imaginea. /n Cu un consum de energie electrică de 120 W și consum de energie electrică de 85 kWh/1000 de ore, televizorul NEI 50NE6900 este eficient din punct de vedere energetic. /n Conectați-vă la internet wireless cu ajutorul funcției Wi-Fi pentru a accesa conținutul online preferat.",
  "image" : "50NE6900.jpg",
  "url" : "https://www.emag.ro/televizor-led-nei-127-cm-smart-4k-ultra-hd-clasa-g-50ne6900/pd/DYN3CRMBM/",
  "stock" : true,
},
{
  "id" : "1",
  "model" : "50NE6900",
  "brand" : "NEI",
  "size" : "127",
  "resolution" : "4K",
  "price" : 1349.99,
  "display" : "LED",
  "shortDescription" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm.",
  "description" : "Bucurați-vă de o experiență de vizionare impresionantă cu televizorul LED NEI 50NE6900, echipat cu tehnologie Smart 4K Ultra HD și o diagonală de 127 cm. Vizionați filme, emisiuni, transmisiuni sportive și multe altele la o rezoluție maximă, care vă va duce în mijlocul acțiunii. /n Marca NEI este prezentă în România din 1993 și este cunoscută pentru calitatea și prețurile convenabile ale produselor sale. Televizorul LED NEI 50NE6900 este o dovadă a angajamentului lor de a aduce cele mai noi tehnologii la dispoziția tuturor. /n Cu ajutorul funcției Smart, accesați rapid și ușor conținutul preferat direct de pe televizor, fără cabluri sau setări complicate. Conectați dispozitivele mobile și navigați pe internet în mod confortabil și fără probleme. /n Interfața CI+ vă permite să scăpați de telecomanda suplimentară pentru TV Box-ul oferit de operatorul dvs. de cablu și să controlați canalele TV direct de pe telecomanda televizorului NEI. /n Experimentați cea mai bună calitate a imaginii și sunetului în confortul casei dumneavoastră cu televizorul LED NEI 50NE6900, care va aduna întreaga familie pentru a se bucura de filme, emisiuni și momente speciale înregistrate cu camera foto sau video. /n Conectați-vă cu ușurință la dispozitivele dvs. cu interfața 2 x USB, 1 x RJ-45, 3 x HDMI, CI+ slot și 2 x RF. /n Cu caracteristicile audio Stereo, sistem audio 2 și puterea difuzoarelor integrate de 8W, sunetul va fi la fel de clar și plin de viață ca și imaginea. /n Cu un consum de energie electrică de 120 W și consum de energie electrică de 85 kWh/1000 de ore, televizorul NEI 50NE6900 este eficient din punct de vedere energetic. /n Conectați-vă la internet wireless cu ajutorul funcției Wi-Fi pentru a accesa conținutul online preferat.",
  "image" : "50NE6900.jpg",
  "url" : "https://www.emag.ro/televizor-led-nei-127-cm-smart-4k-ultra-hd-clasa-g-50ne6900/pd/DYN3CRMBM/",
  "stock" : true,
},
]

function App() {
  return (
    <div>
      <Container fluid={true} className="pt-2 pb-2 px-3">
        <Row>      
          {products.map( (data, key) => {
            return (
              <Col sm={6} md={4} lg={4} xl={3} xxl={2} className="p-2">
                <SmallProduct data = { data }/>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
