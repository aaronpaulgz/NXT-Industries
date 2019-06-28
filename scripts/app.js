
<<<<<<< HEAD
=======

>>>>>>> b90ec1815dbaa4b1900232022fbab0cb86d3c0ad
Vue.component('planet', {
  props:{
    name:{type:String, required: true},
    index: {type:Number,required:true}
  },
  data:function (){
    return{
      // data
      data1: 'Welcome to my page',

    }
  },
  template: `
    <div :style="{cursor: 'pointer'}" @click="$emit('open', {planetName: name, index})" class="planeta" :class="planetClassContainer">
      <img :src="planetImage" alt="" :class="planetImageClass"/>
    </div>
  `,
  computed:{
    planetClassContainer: function(){
      return `${this.name.toLowerCase()}-container`;
    },
    planetImage: function(){
      return `../images/planets/${this.name.toLowerCase()}.png`;
    },
    planetImageClass: function(){
      return `solarsystem-${this.name.toLowerCase()}`;
    }
  }
});

Vue.component('planetInfoModal',{
  props:{
    planet:{type: Object,required: true}
  },
  data:function(){
    return {

    }
  },
  template: `
    <div class="planetModalInfoComponent">
      <div class="controlls">
        <div class="goBackBtn" @click="$emit('goback')">
          <div class="level">
<<<<<<< HEAD
            <div class="level-item image"><img src="../images/simbols/Path.png" alt=""/></div>
          <div class="level-item text">Go Back!</div>
=======
            <div class="level-item"><img src="../images/simbols/Path.png" alt=""/></div>
            <div class="level-item">Go Back!</div>
>>>>>>> b90ec1815dbaa4b1900232022fbab0cb86d3c0ad
          </div>
        </div>
        <div class="previousPlanet" @click="$emit('previous')">
          <img src="../images/simbols/previous_btn.png" alt=""/>
        </div>
        <div class="nextPlanet" @click="$emit('next')">
          <img src="../images/simbols/next_btn.png" alt=""/>
        </div>
      </div>
      <div class="containerModal">

        <img :src="planetImage" class="modalInfo-planet" :style="{width: '25%'}" alt=""/>
        <br/>
        <h1>{{planet.name}}</h1>
        <p class="content">{{planet.content}}</p>
        <div class="level">
          <div class="level-item">
            <b>Age</b>: <span> {{planet.age}}</span>
          </div>
          <div class="level-item" v-if="planet.distance !== ''">
            <b>Distance</b>: <span> {{planet.distance}}</span>
          </div>
          <div class="level-item">
            <b>Temperature</b>: <span> {{planet.temperature}}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  computed:{
    planetImage:function(){
<<<<<<< HEAD
      return `../images/planets/${this.planet.name.toLowerCase()}.png`
=======
      return `../images/planets/${this.planet.name}.png`
>>>>>>> b90ec1815dbaa4b1900232022fbab0cb86d3c0ad
    }
  }

})

var app = new Vue({
  el: '#app',
  data:{
    // planetsOrder:['mercury', 'venus', 'earth', 'mars','jupiter','saturn','uranus','neptune'],
    planets:[
        {
          name: 'Sun',
          content: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma,[with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth.',
          temperature: '1.57 x 10^7 K',
          age: '4.6 billion',
          distance: '149,6 million km'
        },
        {
          name: 'Mercury',
          content: 'Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.',
          temperature: '872º F',
          age: '4.5 billion',
          distance: '77 million km'
        },
        {
          name: 'Venus',
          content: 'Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It does not have any natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon.',
          temperature: '752º F',
          age: '4.5 billion',
          distance: '77 million km'
        },
        {
          name: 'Earth',
          content: 'Earth is the third planet from the Sun, and the only astronomical object known to harbor life. Earth’s axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth. The gravitational interaction between Earth and the Moon causes tides, stabilizes Earth’s orientation on its axis, and gradually slows its rotation.',
          temperature: '57,29º F',
          age: '4.5 billion',
          distance: ''
        },
        {
          name: 'Mars',
          content: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the “Red Planet” because the iron oxide prevalent on its surface gives it a reddish appearance.',
          temperature: '-50,8º F',
          age: '4.6 billion',
          distance: '54,6 million km'
        },
        {
          name: 'Jupiter',
          content: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter has been known to astronomers since antiquity. It is named after the Roman god Jupiter.',
          temperature: '-186.07º F',
          age: '4.5 billion',
          distance: '594 million km'
        },
        {
          name: 'Saturn',
          content: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn’s.',
          temperature: '-202.27º F',
          age: '4.5 billion',
          distance: '1.5 billion km'
        },
        {
          name: 'Uranus',
          content: 'The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. The composition of Uranus’ clouds had long been a mystery.',
          temperature: '-371º F',
          age: '4.5 billion',
          distance: '2.8 billion km'
        },
        {
          name: 'Neptune',
          content: 'In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.',
          temperature: '-353º F',
          age: '4.5 billion',
          distance: '4.5 billion km'
        }
    ],
    planetInfoModal: false,
    planetIndex: 0,
    planet:{
      name: '',
      content: '',
      temperature: '',
      age: '',
      distance: ''
    }
  },
  methods:{
    togglePlanetInfo({planetName, index}){
      console.log(planetName);
      this.planetInfoModal = !this.planetInfoModal;
      let planet = this.planets.find(function(planetG){
        return planetG.name == planetName;
      });
      this.planet=planet;
      this.planetIndex = index;
    },
    nextPlanet(){
      this.planetIndex = this.planetIndex + 1;
      if(this.planetIndex > (this.planets.length-1)) this.planetIndex = 0;
      this.planet = this.planets[this.planetIndex];
    },
    previousPlanet(){
      this.planetIndex = this.planetIndex - 1;
      if(this.planetIndex < 0) this.planetIndex = (this.planets.length-1);
      this.planet = this.planets[this.planetIndex];
    },
    closePlanetInfo(){
      this.planetInfoModal = false;
    }
  }
});
