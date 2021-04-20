<template>
  <div class="team">
    <h1 class="subheading grey--text">Today</h1>
    <h2 class="subheading grey--text">Calories Remaining: 800 kCal</h2>
    <v-container >
      <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg3>
           <v-card class="ma-3">
             <v-list-item>
               <v-list-item-avatar tile class="mt-n7">
                 <v-sheet color="green" width="40" height="80" elevation="10">
                   <v-icon dark large>store</v-icon>
                  </v-sheet>
                </v-list-item-avatar>
                <v-list-item-content>
                  <div class="overline text-right">Pancakes</div>
                  <v-list-item-title class="headline mb-1 text-right" >280 kCal</v-list-item-title>
                  <div><v-divider></v-divider></div>
                </v-list-item-content> 
              </v-list-item>
              <v-card-actions>
                <div class="overline">Carbs:</div>
                <div class="overline"> 15 grams</div>
              </v-card-actions>
              <v-card-actions>
                <div class="overline">Proteins:</div>
                <div class="overline"> 8 grams</div>
              </v-card-actions>
              <v-card-actions>
                <div class="overline">Fats:</div>
                <div class="overline"> 9 grams</div>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm6 xs12 md6 lg3>
            <v-card class="ma-3">
              <v-list-item>
                <v-list-item-avatar tile class="mt-n7">
                  <v-sheet color="#F44336" width="40" height="80" elevation="10">
                    <v-icon dark large>subscriptions</v-icon>
                  </v-sheet>
                </v-list-item-avatar>
                <v-list-item-content>
                  <div class="overline text-right">Chicken Burger</div>
                  <v-list-item-title class="headline mb-1 text-right" >500 kCal</v-list-item-title>
                  <div><v-divider></v-divider></div>
                </v-list-item-content> 
              </v-list-item>
              <v-card-actions>
                <div class="overline">Carbs:</div>
                <div class="overline"> 15 grams</div>
              </v-card-actions>
              <v-card-actions>
                <div class="overline">Proteins:</div>
                <div class="overline"> 40 grams</div>
              </v-card-actions>
              <v-card-actions>
                <div class="overline">Fats:</div>
                <div class="overline"> 50 grams</div>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm6 xs12 md6 lg3>
            <v-card class="ma-3">
              <v-list-item>
                <v-list-item-avatar tile class="mt-n7">
                  <v-sheet color="#03A9F4" width="40" height="80" elevation="10">
                    <v-icon dark large>add_shopping_cart</v-icon>
                  </v-sheet>
                </v-list-item-avatar>
                <v-list-item-content>
                  <div class="overline text-right">Pizza</div>
                  <v-list-item-title class="headline mb-1 text-right" >550 kCal</v-list-item-title>
                  <div><v-divider></v-divider></div>
                </v-list-item-content> 
              </v-list-item>
              <v-card-actions>
                <div class="overline">Carbs:</div>
                <div class="overline"> 50 grams</div>
              </v-card-actions>
              <v-card-actions>
                <div class="overline">Proteins:</div>
                <div class="overline"> 10 grams</div>
              </v-card-actions>
              <v-card-actions>
                <div class="overline">Fats:</div>
                <div class="overline"> 30 grams</div>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm6 xs12 md6 lg3>
            <v-card class="ma-3">
              <v-list-item >
                <v-list-item-avatar tile class="mt-n7">
                  <v-sheet color="#FFC107" width="40" height="80" elevation="10">
                    <v-icon dark large>folder_shared</v-icon>
                  </v-sheet>
                </v-list-item-avatar>
                <v-list-item-content>
                  <div class="overline text-right">2 Apples</div>
                  <v-list-item-title class="headline mb-1 text-right" >20 kCal</v-list-item-title>
                  <div><v-divider></v-divider></div>
                </v-list-item-content> 
              </v-list-item>
              <v-card-actions>
                <div class="overline">Carbs:</div>
                <div class="overline"> 2 grams</div>
              </v-card-actions>
              <v-card-actions>
                <div class="overline">Proteins:</div>
                <div class="overline"> 0 grams</div>
              </v-card-actions>
              <v-card-actions>
                <div class="overline">Fats:</div>
                <div class="overline"> 0 grams</div>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-btn outlined color="orange">
                <v-icon small left >add</v-icon>
                <span>Add {{person.name}}</span>
            </v-btn>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'team',
  components: {
   
  },
  data : () => ({
    team: [
      {name: 'Breakfast', role: 'web developer', avatar:'../assets/logo.svg'},
      {name: 'Lunch', role: 'Graphic designer', avatar:'../assets/logo.svg'},
      {name: 'Dinner', role: 'web developer', avatar:'../assets/logo.svg'},
      {name: 'Snack', role: 'Desktop developer', avatar:'../assets/logo.svg'},
    ]
  }),
}
</script>