

/*export default (req, res) => {
  const res = await fetch 
  ('https://data.cityofchicago.org/resource/qzdf-xmn8.json')
  const data = await res.json()

  return { data}

}*/

const Artists = (props) => (
  <h1>Artists</h1>
)

Artists.getInitialProps = async function() {
  const res = await fetch 
  ('https://data.cityofchicago.org/resource/qzdf-xmn8.json')
  const data = await res.json()

  return {
    bpi: data
  }
}
