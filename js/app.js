const KEY="fakeDatingApp_v1";
const defaultData={
  profiles:[{"id":"p01","name":"Alex","age":27,"location":"Cebu","bio":"Coffee, late-night drives and finding new places.","tags":["Coffee","Travel","Music"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about coffee."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good coffee sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good travel \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cebu."},{"keywords":["cebu","davao","manila"],"reply":"Cebu has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around coffee and travel."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p02","name":"Mia","age":25,"location":"Davao","bio":"Foodie, movie nights and spontaneous weekend plans.","tags":["Food","Movies","Dogs"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about food."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good food sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good movies \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Davao."},{"keywords":["cebu","davao","manila"],"reply":"Davao has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around food and movies."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p03","name":"Sam","age":29,"location":"Manila","bio":"Gym, gaming and good conversations.","tags":["Gaming","Fitness","Tech"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about gaming."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good gaming sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good fitness \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Manila."},{"keywords":["cebu","davao","manila"],"reply":"Manila has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around gaming and fitness."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p04","name":"Jamie","age":26,"location":"Cebu","bio":"Beach days, photography and good coffee.","tags":["Beach","Photos","Coffee"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about beach."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good beach sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good photos \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cebu."},{"keywords":["cebu","davao","manila"],"reply":"Cebu has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around beach and photos."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p05","name":"Taylor","age":28,"location":"Baguio","bio":"Quiet weekends, books and mountain views.","tags":["Books","Nature","Travel"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about books."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good books sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good nature \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Baguio."},{"keywords":["cebu","davao","manila"],"reply":"Baguio has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around books and nature."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p06","name":"Jordan","age":30,"location":"Manila","bio":"Music, concerts and trying new restaurants.","tags":["Music","Food","Concerts"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about music."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good music sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good food \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Manila."},{"keywords":["cebu","davao","manila"],"reply":"Manila has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around music and food."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p07","name":"Casey","age":24,"location":"Iloilo","bio":"Cafes, sunsets and random road trips.","tags":["Cafes","Sunsets","Road Trips"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about cafes."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good cafes sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good sunsets \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Iloilo."},{"keywords":["cebu","davao","manila"],"reply":"Iloilo has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around cafes and sunsets."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p08","name":"Riley","age":27,"location":"Bacolod","bio":"Dessert lover and weekend explorer.","tags":["Dessert","Travel","Pets"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about dessert."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good dessert sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good travel \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Bacolod."},{"keywords":["cebu","davao","manila"],"reply":"Bacolod has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around dessert and travel."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p09","name":"Avery","age":26,"location":"Cebu","bio":"Gaming after work and spontaneous adventures.","tags":["Gaming","Anime","Travel"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about gaming."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good gaming sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good anime \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cebu."},{"keywords":["cebu","davao","manila"],"reply":"Cebu has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around gaming and anime."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p10","name":"Morgan","age":31,"location":"Davao","bio":"Cooking, fitness and family time.","tags":["Cooking","Fitness","Family"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about cooking."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good cooking sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good fitness \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Davao."},{"keywords":["cebu","davao","manila"],"reply":"Davao has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around cooking and fitness."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p11","name":"Jamie L.","age":25,"location":"Cagayan de Oro","bio":"Always looking for a new place to eat.","tags":["Food","Coffee","Travel"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about food."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good food sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good coffee \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cagayan de Oro."},{"keywords":["cebu","davao","manila"],"reply":"Cagayan de Oro has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around food and coffee."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p12","name":"Chris","age":29,"location":"Manila","bio":"Tech enthusiast who loves movies.","tags":["Tech","Movies","Gaming"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about tech."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good tech sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good movies \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Manila."},{"keywords":["cebu","davao","manila"],"reply":"Manila has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around tech and movies."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p13","name":"Dani","age":27,"location":"Cebu","bio":"Dog person, beach person, probably both.","tags":["Dogs","Beach","Food"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about dogs."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good dogs sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good beach \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cebu."},{"keywords":["cebu","davao","manila"],"reply":"Cebu has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around dogs and beach."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p14","name":"Blake","age":28,"location":"Tagaytay","bio":"Cold weather, good food and long conversations.","tags":["Food","Nature","Coffee"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about food."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good food sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good nature \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Tagaytay."},{"keywords":["cebu","davao","manila"],"reply":"Tagaytay has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around food and nature."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p15","name":"Sky","age":24,"location":"Dumaguete","bio":"Sunsets, music and slow mornings.","tags":["Music","Beach","Art"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about music."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good music sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good beach \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Dumaguete."},{"keywords":["cebu","davao","manila"],"reply":"Dumaguete has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around music and beach."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p16","name":"Reese","age":30,"location":"Manila","bio":"Work hard, travel often, laugh a lot.","tags":["Travel","Fitness","Food"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about travel."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good travel sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good fitness \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Manila."},{"keywords":["cebu","davao","manila"],"reply":"Manila has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around travel and fitness."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p17","name":"Cameron","age":26,"location":"Cebu","bio":"Board games and finding hidden restaurants.","tags":["Games","Food","Friends"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about games."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good games sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good food \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cebu."},{"keywords":["cebu","davao","manila"],"reply":"Cebu has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around games and food."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p18","name":"Quinn","age":29,"location":"Baguio","bio":"Books, coffee and rainy afternoons.","tags":["Books","Coffee","Movies"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about books."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good books sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good coffee \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Baguio."},{"keywords":["cebu","davao","manila"],"reply":"Baguio has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around books and coffee."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p19","name":"Drew","age":27,"location":"Iloilo","bio":"Basketball, food trips and good playlists.","tags":["Sports","Food","Music"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about sports."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good sports sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good food \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Iloilo."},{"keywords":["cebu","davao","manila"],"reply":"Iloilo has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around sports and food."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p20","name":"Harper","age":25,"location":"Davao","bio":"Plant parent and amateur baker.","tags":["Plants","Baking","Coffee"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about plants."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good plants sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good baking \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Davao."},{"keywords":["cebu","davao","manila"],"reply":"Davao has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around plants and baking."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p21","name":"Emery","age":28,"location":"Cebu","bio":"Photography and weekend beach trips.","tags":["Photos","Beach","Travel"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about photos."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good photos sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good beach \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cebu."},{"keywords":["cebu","davao","manila"],"reply":"Cebu has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around photos and beach."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p22","name":"Parker","age":31,"location":"Manila","bio":"Coffee by day, gaming by night.","tags":["Coffee","Gaming","Tech"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about coffee."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good coffee sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good gaming \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Manila."},{"keywords":["cebu","davao","manila"],"reply":"Manila has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around coffee and gaming."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p23","name":"Sage","age":26,"location":"Bacolod","bio":"Trying recipes and watching series.","tags":["Cooking","Series","Food"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about cooking."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good cooking sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good series \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Bacolod."},{"keywords":["cebu","davao","manila"],"reply":"Bacolod has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around cooking and series."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p24","name":"Finley","age":27,"location":"Cebu","bio":"Cycling, music and exploring the city.","tags":["Cycling","Music","Travel"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about cycling."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good cycling sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good music \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cebu."},{"keywords":["cebu","davao","manila"],"reply":"Cebu has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around cycling and music."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p25","name":"Rowan","age":29,"location":"Davao","bio":"Cats, books and cozy cafes.","tags":["Cats","Books","Cafes"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about cats."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good cats sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good books \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Davao."},{"keywords":["cebu","davao","manila"],"reply":"Davao has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around cats and books."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p26","name":"Kendall","age":24,"location":"Manila","bio":"Concerts, friends and spontaneous plans.","tags":["Music","Friends","Events"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about music."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good music sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good friends \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Manila."},{"keywords":["cebu","davao","manila"],"reply":"Manila has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around music and friends."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p27","name":"Logan","age":30,"location":"Cebu","bio":"Fitness, hiking and weekend road trips.","tags":["Fitness","Hiking","Travel"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about fitness."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good fitness sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good hiking \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cebu."},{"keywords":["cebu","davao","manila"],"reply":"Cebu has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around fitness and hiking."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p28","name":"Nico","age":26,"location":"Iloilo","bio":"Foodie with a soft spot for old movies.","tags":["Food","Movies","Coffee"],"image":"images/alex.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about food."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good food sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good movies \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Iloilo."},{"keywords":["cebu","davao","manila"],"reply":"Iloilo has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around food and movies."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p29","name":"Ellis","age":28,"location":"Tagaytay","bio":"Nature walks and trying new coffee shops.","tags":["Nature","Coffee","Travel"],"image":"images/mia.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about nature."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good nature sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good coffee \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Tagaytay."},{"keywords":["cebu","davao","manila"],"reply":"Tagaytay has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around nature and coffee."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]},{"id":"p30","name":"Blair","age":25,"location":"Cebu","bio":"Art, music and finding underrated places.","tags":["Art","Music","Food"],"image":"images/sam.svg","autoReply":[{"keywords":["hi","hello","hey"],"reply":"Hey! \ud83d\ude0a I saw you're curious about art."},{"keywords":["how are you","how's your day"],"reply":"I'm doing pretty good! How about you?"},{"keywords":["what are you doing"],"reply":"Just relaxing a bit. You?"},{"keywords":["coffee"],"reply":"I'd definitely be up for a good art sometime."},{"keywords":["food","eat","dinner"],"reply":"I'm always interested in good music \ud83d\ude04"},{"keywords":["movie","film"],"reply":"I could watch a good movie for hours."},{"keywords":["music","song"],"reply":"My playlist changes depending on my mood."},{"keywords":["game","gaming"],"reply":"What game are you into lately?"},{"keywords":["gym","workout"],"reply":"A workout always feels good afterward."},{"keywords":["travel","trip"],"reply":"I'd love to travel when I get the chance."},{"keywords":["beach"],"reply":"A beach day sounds perfect right now."},{"keywords":["weekend"],"reply":"Weekends are for doing something fun."},{"keywords":["work"],"reply":"Work was okay today. Finally getting to relax."},{"keywords":["sleep"],"reply":"I try to get enough sleep, but sometimes I fail \ud83d\ude02"},{"keywords":["morning"],"reply":"I'm definitely not always a morning person."},{"keywords":["night"],"reply":"Late nights can be pretty peaceful."},{"keywords":["favorite"],"reply":"That's a tough question! What about you?"},{"keywords":["where"],"reply":"I'd love to explore more places around Cebu."},{"keywords":["cebu","davao","manila"],"reply":"Cebu has some pretty good spots!"},{"keywords":["fun"],"reply":"Anything involving good food is fun to me."},{"keywords":["haha","lol"],"reply":"Haha \ud83d\ude02 you're funny."},{"keywords":["really"],"reply":"Really! I didn't expect that."},{"keywords":["why"],"reply":"Good question. Let me think about that."},{"keywords":["how"],"reply":"That's a good question actually."},{"keywords":["what"],"reply":"I like reading when I have enough quiet time."},{"keywords":["book","books"],"reply":"Dogs are hard to resist \ud83d\ude04"},{"keywords":["dog","dogs"],"reply":"Cats have so much personality."},{"keywords":["cat","cats"],"reply":"Concerts are always a good experience."},{"keywords":["concert"],"reply":"I know a couple of places I'd recommend."},{"keywords":["restaurant"],"reply":"I love trying new restaurants."},{"keywords":["cook","cooking"],"reply":"I can cook a few things pretty well."},{"keywords":["photo","photography"],"reply":"Taking photos is a fun way to remember trips."},{"keywords":["coffee shop","cafe"],"reply":"A cozy cafe is hard to beat."},{"keywords":["road trip"],"reply":"Road trips are better with good music."},{"keywords":["hobby"],"reply":"My hobbies are mostly around art and music."},{"keywords":["family"],"reply":"Family time is important to me."},{"keywords":["friends"],"reply":"Good friends make everything more fun."},{"keywords":["date"],"reply":"A simple date with good conversation sounds nice."},{"keywords":["meet"],"reply":"Meeting someone new can be exciting \ud83d\ude0a"},{"keywords":["bye","goodnight"],"reply":"Goodnight! Talk to you later."}]}],
  matches:[],
  chats:{},
  notifications:[],
  currentIndex:0
};

let data=load();
const imageCache={};
let imageDBPromise=null;

function openImageDB(){
 if(imageDBPromise)return imageDBPromise;
 imageDBPromise=new Promise((resolve,reject)=>{
   const req=indexedDB.open("BumbIImageStore",1);
   req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains("images"))req.result.createObjectStore("images")};
   req.onsuccess=()=>resolve(req.result);
   req.onerror=()=>reject(req.error);
 });
 return imageDBPromise;
}
async function putImage(key,blob){
 const db=await openImageDB();
 return new Promise((resolve,reject)=>{
   const tx=db.transaction("images","readwrite");
   tx.objectStore("images").put(blob,key);
   tx.oncomplete=()=>resolve();
   tx.onerror=()=>reject(tx.error);
 });
}
async function getImage(key){
 if(imageCache[key])return imageCache[key];
 const db=await openImageDB();
 return new Promise((resolve,reject)=>{
   const req=db.transaction("images","readonly").objectStore("images").get(key);
   req.onsuccess=()=>{
     if(!req.result){resolve(null);return}
     const url=URL.createObjectURL(req.result);
     imageCache[key]=url;resolve(url);
   };
   req.onerror=()=>reject(req.error);
 });
}
async function deleteImage(key){
 try{
   const db=await openImageDB();
   await new Promise((resolve,reject)=>{
     const tx=db.transaction("images","readwrite");
     tx.objectStore("images").delete(key);
     tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
   });
 }catch{}
 if(imageCache[key]){URL.revokeObjectURL(imageCache[key]);delete imageCache[key]}
}
function normalizeProfiles(){
 // Keep this simulator to 15 profiles, with at most 25 replies each.
 data.profiles=data.profiles.slice(0,15);
 const validProfileIds=new Set(data.profiles.map(p=>p.id));
 data.matches=data.matches.filter(id=>validProfileIds.has(id));
 Object.keys(data.chats).forEach(id=>{if(!validProfileIds.has(id))delete data.chats[id]});
 data.profiles.forEach(p=>{
   if(!Array.isArray(p.autoReply))p.autoReply=[];
   p.autoReply=p.autoReply.slice(0,25);
 });
 if(!Number.isFinite(Number(data.replyDelayMin)))data.replyDelayMin=0.5;
 if(!Number.isFinite(Number(data.replyDelayMax)))data.replyDelayMax=5;
 if(Number(data.replyDelayMin)===3 && Number(data.replyDelayMax)===6){data.replyDelayMin=0.5;data.replyDelayMax=5;}
 data.replyDelayMin=Math.max(0.5,Math.min(120,Number(data.replyDelayMin)));
 data.replyDelayMax=Math.max(data.replyDelayMin,Math.min(180,Number(data.replyDelayMax)));

 data.profiles.forEach(p=>{
   if(!Array.isArray(p.images))p.images=p.image?[p.image]:["images/alex.svg"];
   p.images=p.images.filter(Boolean).slice(0,4);
   if(!p.images.length)p.images=["images/alex.svg"];
   p.image=p.images[0];
   if(!Array.isArray(p.photoNotes))p.photoNotes=[];
   p.photoNotes=p.images.map((_,i)=>p.photoNotes[i]||"");
   if(!p.photoNotes[0] && p.imageText)p.photoNotes[0]=p.imageText;
   if(!p.lifestyle)p.lifestyle="";
 });
}
function imageSrc(src){return src?.startsWith("idb:")?(imageCache[src]||""):src}
async function hydrateImages(){
 for(const p of data.profiles){
   if(!Array.isArray(p.images))p.images=p.image?[p.image]:["images/alex.svg"];
   // Migrate older data-URL images out of localStorage into IndexedDB.
   for(let i=0;i<p.images.length;i++){
     const src=p.images[i];
     if(typeof src==="string" && src.startsWith("data:")){
       try{
         const res=await fetch(src);
         const blob=await res.blob();
         const key=`idb:${p.id}:${Date.now()}:${i}:${Math.random().toString(36).slice(2)}`;
         await putImage(key,blob);
         p.images[i]=key;
       }catch{
         p.images[i]="images/alex.svg";
       }
     }
   }
   p.images=p.images.filter(Boolean).slice(0,4);
   if(!p.images.length)p.images=["images/alex.svg"];
   p.image=p.images[0];
   for(const src of p.images)if(src.startsWith("idb:"))await getImage(src);
 }
 save();
 renderAll();
}

normalizeProfiles();
hydrateImages().catch(()=>renderAll());

function profileImagesHTML(p){
 return p.images.map((img,i)=>`<div class="photo-slot"><img src="${esc(imageSrc(img))}"><button type="button" class="photo-remove" data-remove-photo="${p.id}:${i}" title="Remove">✕</button></div>`).join("");
}
let activeChat=null;

function clone(o){return JSON.parse(JSON.stringify(o))}
function load(){try{const x=JSON.parse(localStorage.getItem(KEY));return x?Object.assign(clone(defaultData),x):clone(defaultData)}catch{return clone(defaultData)}}
function save(){localStorage.setItem(KEY,JSON.stringify(data))}
function profile(id){return data.profiles.find(p=>p.id===id)}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function time(){return new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}
function messageDate(m){if(m.timestamp)return new Date(m.timestamp);if(m.date)return new Date(m.date);return null}
function lastChatLabel(messages){if(!messages?.length)return "";const m=messages[messages.length-1],d=messageDate(m);if(!d||Number.isNaN(d.getTime()))return m.time||"";const now=new Date(),same=d.toDateString()===now.toDateString();const yesterday=new Date(now);yesterday.setDate(now.getDate()-1);if(same)return d.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});if(d.toDateString()===yesterday.toDateString())return "Yesterday";const days=(now-d)/86400000;if(days<7)return d.toLocaleDateString([], {weekday:"short",hour:"2-digit",minute:"2-digit"});return d.toLocaleDateString([], {month:"short",day:"numeric",year:"numeric"})}
function toast(t){const e=document.getElementById("toast");e.textContent=t;e.classList.remove("hidden");setTimeout(()=>e.classList.add("hidden"),2200)}
let notificationAudioContext=null;
let replyAudio=null;
let replyAudioUnlocked=false;
function getReplyAudio(){
 if(!replyAudio){
   replyAudio=new Audio(new URL("audio/reply-notification.mp3",document.baseURI).href);
   replyAudio.preload="auto";
   replyAudio.setAttribute("playsinline","");
   replyAudio.volume=0.85;
 }
 return replyAudio;
}
async function unlockNotificationSound(showFeedback=false){
 try{
   const AudioCtx=window.AudioContext||window.webkitAudioContext;
   if(AudioCtx){
     if(!notificationAudioContext)notificationAudioContext=new AudioCtx();
     if(notificationAudioContext.state==="suspended")await notificationAudioContext.resume();
   }
   // Must be called directly from a user gesture on mobile/PWA.
   const audio=getReplyAudio();
   audio.muted=true;
   audio.currentTime=0;
   await audio.play();
   audio.pause();audio.currentTime=0;audio.muted=false;replyAudioUnlocked=true;
   if(showFeedback){
     audio.currentTime=0;
     await audio.play();
     toast("Notification sound enabled on this device");
   }
 }catch(e){
   if(showFeedback)toast("Sound was blocked. Check phone silent mode and browser audio settings.");
 }
}
function playReplySound(){
 try{
   const audio=getReplyAudio();
   audio.currentTime=0;
   audio.muted=false;
   audio.play().catch(()=>{});
 }catch(e){}
}
document.addEventListener("pointerdown",()=>unlockNotificationSound(false),{once:true});
document.addEventListener("keydown",()=>unlockNotificationSound(false),{once:true});
document.getElementById("enableSound")?.addEventListener("click",()=>unlockNotificationSound(true));
function addNotif(text){data.notifications.unshift({id:Date.now()+Math.random(),text,time:time(),read:false});save();renderNotifications();document.getElementById("notifDot").classList.remove("hidden")}
function chatFor(id){if(!data.chats[id])data.chats[id]=[];return data.chats[id]}
function unreadCount(id){return chatFor(id).filter(m=>m.from==="them"&&!m.read).length}
function markChatRead(id){chatFor(id).forEach(m=>{if(m.from==="them")m.read=true});save();renderChats()}
function updateChatsNavBadge(){
 const total=data.matches.reduce((sum,id)=>sum+unreadCount(id),0);
 const nav=document.querySelector('.nav-item[data-view="chatsView"]');
 if(!nav)return;
 let badge=nav.querySelector(".nav-unread-count");
 if(total>0){if(!badge){badge=document.createElement("span");badge.className="nav-unread-count unread-count";badge.setAttribute("aria-label","unread messages");nav.appendChild(badge)}badge.textContent=total>99?"99+":String(total);badge.setAttribute("aria-label",`${total} unread messages`)}
 else if(badge)badge.remove();
}
let swipeState={active:false,startX:0,startY:0,currentX:0,currentY:0,card:null};

function setupSwipe(){
 const card=document.querySelector(".profile-card");
 if(!card)return;
 card.addEventListener("pointerdown",e=>{
   if(e.pointerType==="mouse" && e.button!==0)return;
   swipeState={active:true,startX:e.clientX,startY:e.clientY,currentX:e.clientX,currentY:e.clientY,card,tappedImage:!!e.target.closest(".profile-card > img")};
   card.setPointerCapture?.(e.pointerId);
   card.classList.add("dragging");
 });
 card.addEventListener("pointermove",e=>{
   if(!swipeState.active || swipeState.card!==card)return;
   swipeState.currentX=e.clientX;swipeState.currentY=e.clientY;
   const dx=e.clientX-swipeState.startX;
   const dy=e.clientY-swipeState.startY;
   if(Math.abs(dx)<4)return;
   const rotate=Math.max(-18,Math.min(18,dx/16));
   card.style.transform=`translate(${dx}px,${dy*0.18}px) rotate(${rotate}deg)`;
   card.style.opacity=String(Math.max(.45,1-Math.abs(dx)/500));
 });
 const finish=e=>{
   if(!swipeState.active || swipeState.card!==card)return;
   const dx=e.clientX-swipeState.startX;
   const dy=e.clientY-swipeState.startY;
   swipeState.active=false;
   card.classList.remove("dragging");
   if(Math.abs(dx)>110 && Math.abs(dx)>Math.abs(dy)){
     const direction=dx>0?"like":"pass";
     card.style.transition="transform .28s ease, opacity .28s ease";
     card.style.transform=`translate(${dx>0?700:-700}px,${dy*0.18}px) rotate(${dx>0?25:-25}deg)`;
     card.style.opacity="0";
     setTimeout(()=>next(direction),220);
   }else{
     card.style.transition="transform .22s ease, opacity .22s ease";
     card.style.transform="";
     card.style.opacity="1";
     setTimeout(()=>{card.style.transition=""},230);

     // Treat a small pointer movement as a tap. This is important on
     // touch devices because pointer capture can prevent the delegated
     // click handler from firing reliably.
     if(Math.abs(dx)<12 && Math.abs(dy)<12 && swipeState.tappedImage){const id=card.dataset.viewProfile;if(id)openProfileDetails(id);}
   }
 };
 card.addEventListener("pointerup",finish);
 card.addEventListener("pointercancel",finish);
}

function renderCard(){
 const area=document.getElementById("cardArea"); const p=data.profiles[data.currentIndex];
 if(!p){area.innerHTML='<div class="empty">No more profiles. Reset the discovery list from Data.</div>';return}
 area.innerHTML=`<article class="profile-card" data-view-profile="${p.id}"><img src="${esc(imageSrc(p.images?.[0]||p.image)||"images/alex.svg")}" alt="${esc(p.name)}">${(p.images?.length||1)>1?`<div class="photo-count">${p.images.length} photos</div>`:""}<div class="card-overlay"><div class="profile-name">${esc(p.name)}, ${p.age}</div><div class="profile-meta">${esc(p.location)}</div><div class="bio">${esc(p.bio)}</div><div class="tags">${p.tags.map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div></div></article>`;
 setupSwipe();
}
function next(action){
 const p=data.profiles[data.currentIndex]; if(!p)return;
 if(action==="like"){
   if(!data.matches.includes(p.id)){data.matches.push(p.id);chatFor(p.id);addNotif(`It's a match with ${p.name}! 💚`);toast(`Matched with ${p.name}!`)}
 }else toast(`Passed on ${p.name}`);
 data.currentIndex++;save();renderAll();
}
function renderMatches(){
 const e=document.getElementById("matchesList");
 if(!data.matches.length){e.innerHTML='<div class="empty">No matches yet. Like a profile to create a simulated match.</div>';return}
 e.innerHTML=data.matches.map(id=>{const p=profile(id);return `<div class="list-item" data-view-profile="${p.id}" role="button" tabindex="0"><img class="avatar" src="${esc(imageSrc(p.images?.[0]||p.image)||"images/alex.svg")}" alt="${esc(p.name)}"><div class="item-main"><b>${esc(p.name)}, ${p.age}</b><span>${esc(p.bio)}</span></div><button class="open-btn" data-chat="${p.id}">Chat</button></div>`}).join("");
}
function lastMessage(id){const c=chatFor(id);if(!c.length)return "Start the conversation…";const m=c[c.length-1];return m.image?"📷 Photo":(m.text||"Attachment")}
function messageStamp(){const d=new Date();return {time:time(),timestamp:d.toISOString()}}
function renderChats(){
 const e=document.getElementById("chatList");
 if(!data.matches.length){e.innerHTML='<div class="empty">Your matched chats will appear here.</div>';updateChatsNavBadge();return}
 e.innerHTML=data.matches.map(id=>{const p=profile(id),unread=unreadCount(id);return `<div class="list-item chat-list-item"><img class="avatar" src="${imageSrc(p.images?.[0]||p.image)}"><div class="item-main"><b>${esc(p.name)} <small class="chat-last-time">${esc(lastChatLabel(chatFor(id)))}</small></b><span>${esc(lastMessage(id))}</span></div>${unread?`<span class="unread-count" aria-label="${unread} unread messages">${unread>99?"99+":unread}</span>`:""}<button class="open-btn" data-chat="${p.id}">Open</button></div>`}).join("");
 updateChatsNavBadge();
}
function renderNotifications(){
 const e=document.getElementById("notificationsList");
 if(!data.notifications.length){e.innerHTML='<div class="empty">No notifications yet.</div>';return}
 e.innerHTML=data.notifications.map(n=>`<div class="list-item"><div class="item-main"><b>${esc(n.text)}</b><span>${esc(n.time)}</span></div></div>`).join("");
 const unread=data.notifications.some(n=>!n.read);document.getElementById("notifDot").classList.toggle("hidden",!unread);
}
function openChat(id){
 activeChat=id;markChatRead(id);const p=profile(id);document.getElementById("chatModal").classList.remove("hidden");
 document.getElementById("chatHeader").innerHTML=`<img src="${imageSrc(p.images?.[0]||p.image)}"><span>${esc(p.name)}</span>`;
 renderMessages();
}
function renderMessages(){
 const e=document.getElementById("messages"),c=chatFor(activeChat);
 e.innerHTML=c.length?c.map((m,i)=>`<div class="bubble ${m.from==="me"?"me":"them"}" data-message-index="${i}" data-message-from="${m.from}"><div class="bubble-content">${m.image?`<img class="chat-attachment" src="${esc(m.image)}" alt="Attached image" loading="lazy">`:""}${m.text?`<div>${esc(m.text)}</div>`:""}</div>${m.reaction?`<span class="message-reaction">${m.reaction}</span>`:""}${m.from==="me"&&m.edited?'<em class="edited-label">edited</em>':""}<small>${esc(m.time||"")}</small><button type="button" class="message-edit-btn" data-edit-chat-message="${i}" aria-label="Edit message" title="Edit message">✎</button></div>`).join(""):'<div class="empty">Start the conversation with a message.</div>';
 e.scrollTop=e.scrollHeight;
 setupMessageEditing();
}
let editMessageIndex=null;
let editMessageTimer=null;
let editMessageMoved=false;
function openEditMessage(index){
 const msg=chatFor(activeChat)[index];
 if(!msg || msg.from!=="me")return;
 editMessageIndex=index;
 document.getElementById("editMessageText").value=msg.text||"";
 document.getElementById("editMessageModal").classList.remove("hidden");
 document.getElementById("editMessageText").focus();
}
function closeEditMessage(){
 editMessageIndex=null;
 document.getElementById("editMessageModal")?.classList.add("hidden");
}
function setupMessageEditing(){
 const area=document.getElementById("messages");
 if(!area || area.dataset.editReady)return;
 area.dataset.editReady="1";
 area.addEventListener("contextmenu",e=>{
   const msg=e.target.closest("[data-message-index]");
   if(msg && msg.dataset.messageFrom==="me"){
     e.preventDefault();
     openEditMessage(Number(msg.dataset.messageIndex));
   }
 });
}

function pickChatReply(text, p, rules){
 const lower=text.toLowerCase();
 const rule=rules.find(r=>(r.keywords||[]).some(k=>lower.includes(k.toLowerCase())));
 const pick=list=>list[Math.floor(Math.random()*list.length)];
 const replies={
   hello:["Heyyy 😄 Kumusta imong adlaw? Be honest ha, okay ra ka or kinahanglan kag chika?","Hiii! I was going to act mysterious, pero na-excite ko nga ni-message ka 😂","Hello there 👋 Kumusta? Unsay pinaka-random nga nahitabo nimo today?"],
   romance:["Quick question: are you always this interesting or special edition ra ni para nako? 👀","Are you Wi-Fi? Kay murag na-connect na akong attention nimo. 😭😂","Dili ko maayo mo-pickup line, pero maayo ko mo-ask: when ta mag-coffee? ☕😉","You must be a notification, kay every time you appear, I smile. Corny? Oo. Effective? Maybe. 😂"],
   jokes:["Dad joke time: Why don't eggs tell jokes? They might crack up. 🥚😂","Ngano dili mag-away ang mga isda? Kay they don't want to make a big splash. 🐟😭","I told my phone I needed space… karon nag-delete siyag photos. Very supportive. 😂","Unsa tawag sa iro nga magician? A labracadabrador. Ayaw ko i-block please. 🐶"],
   food:["Food question is serious: lechon, sinigang, or pizza? Choose wisely kay this may affect our future. 😂","Gutoma oy. If naa kay pagkaon karon, unsa? Apil ko sa imagination. 😭","I can cook… technically. My specialty is making instant noodles look premium. 🍜"],
   day:["Okay ra man, pero mas interesting na akong adlaw kay ni-chat ka. Charot lang… unless? 👀","Kapoy gamay, pero laban. Ikaw, unsay highlight sa imong adlaw? Bisag small win lang.","Honestly, medyo chaotic today 😂 Ikaw, peaceful ba imong adlaw or murag teleserye?"],
   suspense:["Wait lang… naa koy isulti nimo. 😶‍🌫️","Okay, promise dili ni chismis… well, technically chismis ni about me. Ready ka? 😂","Naay something funny nahitabo ganina, pero di ko kabalo if kataw-anan ba or embarrassing. Want to hear it? 👀","I have a tiny confession… pero basin i-judge ko nimo. 😭"],
   stories:["Mini story: niadto ko sa tindahan para palit tubig, pero pag-abot didto nakalimot ko unsay paliton. Character development: 0. 😂 Ikaw, naa kay funny story?","One time, nag-wave ko sa someone thinking kaila nako. Wala diay. Human sa awkward wave, nag-commit na lang ko ug smile. 😭","Imagine: rainy evening, warm coffee, good music, and someone who laughs at my terrible jokes. Sounds nice, no? ☕🌧️","Plot twist sa akong life karon: nag-open ko sa fridge three times, hoping new food would spawn. 😂"],
   general:["Hala, interesting lagi na 👀 Tell me more!","Hahaha wait, explain daw kay gusto ko makasabot sa full lore. 😂","Random thought: mas nice ang conversation kung walay pressure, just vibes and a little pagka-weird. 😌","I have a very important question: unsa imong comfort food, and why is it probably the right answer? 😂","Ayaw sa pag-disappear ha, naa pa koy at least three terrible jokes in stock. 😭","You seem fun to talk to. Unsay topic nga maka-chika ka for hours?","Lowkey curious ko nimo. Unsay something about you nga dili obvious sa imong profile? 👀","Sige, your turn: ask me anything—pero ayaw lang about my questionable humor. 😂"]
 };
 let category='general';
 if(/^(hi|hello|hey|hiii|heyy|kumusta)/i.test(lower.trim())) category='hello';
 else if(/(joke|funny|haha|lol|😂|dad joke)/i.test(lower)) category='jokes';
 else if(/(food|eat|hungry|dinner|lunch|breakfast|lechon|sinigang|cook)/i.test(lower)) category='food';
 else if(/(how are you|how's your day|your day|kumusta|kapoy|tired|work)/i.test(lower)) category='day';
 else if(/(love|date|crush|cute|miss you|handsome|beautiful|single|kiss|heart)/i.test(lower)) category='romance';
 else if(/(story|tell me|secret|confession|guess what|what happened|chika|tea)/i.test(lower)) category=Math.random()<0.55?'suspense':'stories';
 else if(Math.random()<0.20) category='stories';
 else if(Math.random()<0.18) category='suspense';
 else if(Math.random()<0.20) category='romance';
 // Keep some profile-specific keyword replies, but mix in more natural playful chat.
 if(rule && Math.random()<0.38) return rule.reply;
 return pick(replies[category] || replies.general);
}

function autoReply(text){
 const p=profile(activeChat);
 if(!p)return;
 const rules=Array.isArray(p.autoReply)?p.autoReply.slice(0,25):[];
 const reply=pickChatReply(text,p,rules);
 if(!reply)return;

 // Random delay uses the user's saved settings (default: 30 seconds–5 minutes).
 // This simulated timer runs while the app page remains open.
 const minMinutes=Math.max(0.5,Number(data.replyDelayMin)||0.5);
 const maxMinutes=Math.max(minMinutes,Number(data.replyDelayMax)||5);
 const delayMs=(minMinutes*60*1000)+Math.floor(Math.random()*((maxMinutes-minMinutes)*60*1000+1));
 document.getElementById("typing")?.classList.add("hidden");
 const targetId=activeChat;
 setTimeout(()=>{
   const target=profile(targetId);
   if(!target)return;
   const chatIsOpen=activeChat===targetId&&!document.getElementById("chatModal").classList.contains("hidden");
   chatFor(targetId).push({from:"them",text:reply,...messageStamp(),read:chatIsOpen});
   addNotif(`${target.name} replied to your message`);
   playReplySound();
   save();
   if(chatIsOpen){
     document.getElementById("typing").classList.add("hidden");
     renderMessages();
   }
   renderChats();
 },delayMs);
}
function sendMessage(){
 const input=document.getElementById("messageInput"),text=input.value.trim();if(!text||!activeChat)return;
 chatFor(activeChat).push({from:"me",text,...messageStamp()});input.value="";save();renderMessages();renderChats();autoReply(text);
}
async function sendImage(file){if(!file||!activeChat)return;if(!file.type.startsWith("image/")){toast("Please choose an image");return;}if(file.size>12*1024*1024){toast("Choose an image under 12 MB");return;}try{const dataUrl=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>{const img=new Image();img.onload=()=>{const scale=Math.min(1,1600/Math.max(img.width,img.height));const canvas=document.createElement("canvas");canvas.width=Math.max(1,Math.round(img.width*scale));canvas.height=Math.max(1,Math.round(img.height*scale));canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL("image/jpeg",0.78));};img.onerror=reject;img.src=r.result;};r.onerror=reject;r.readAsDataURL(file)});chatFor(activeChat).push({from:"me",text:"",image:dataUrl,...messageStamp()});save();renderMessages();renderChats();toast("Image sent");}catch{toast("Could not attach that image");}}
function setReaction(index,reaction){const msg=chatFor(activeChat)[index];if(!msg)return;msg.reaction=msg.reaction===reaction?"":reaction;save();renderMessages();renderChats();}
function setupReactions(){const area=document.getElementById("messages");if(!area||area.dataset.reactionReady)return;area.dataset.reactionReady="1";let timer=null,moved=false,target=null;area.addEventListener("pointerdown",e=>{target=e.target.closest("[data-message-index]");if(!target)return;moved=false;clearTimeout(timer);timer=setTimeout(()=>{if(!moved&&target){const idx=Number(target.dataset.messageIndex);showReactionPicker(target,idx)}},520);});area.addEventListener("pointermove",()=>{moved=true;clearTimeout(timer)});["pointerup","pointercancel","scroll"].forEach(ev=>area.addEventListener(ev,()=>clearTimeout(timer)));area.addEventListener("contextmenu",e=>{const b=e.target.closest("[data-message-index]");if(b){e.preventDefault();showReactionPicker(b,Number(b.dataset.messageIndex))}});}
function showReactionPicker(bubble,index){document.querySelectorAll(".reaction-picker").forEach(x=>x.remove());const picker=document.createElement("div");picker.className="reaction-picker";picker.innerHTML=`<button type="button" data-reaction="❤️" aria-label="Heart">❤️</button><button type="button" data-reaction="😡" aria-label="Mad">😡</button><button type="button" data-reaction="😂" aria-label="Laugh">😂</button>`;bubble.appendChild(picker);picker.addEventListener("click",e=>{const btn=e.target.closest("[data-reaction]");if(btn)setReaction(index,btn.dataset.reaction)});setTimeout(()=>{if(picker.isConnected)picker.remove()},4000);}
function showView(id){
 document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));document.getElementById(id).classList.add("active");
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
 if(id==="notificationsView"){data.notifications.forEach(n=>n.read=true);save();renderNotifications()}
}
function renderProfilesPanel(){
 const phtml=data.profiles.map(p=>`<div class="list-item"><img class="avatar" src="${imageSrc(p.images?.[0]||p.image)}"><div class="item-main"><b>${esc(p.name)}, ${p.age}</b><span>${esc(p.location)}</span></div><button class="open-btn" data-edit-profile="${p.id}">Edit</button></div>`).join("");
 document.getElementById("managePanel").innerHTML=`<h3>Fake Profiles</h3><p style="color:#aaa994;font-size:12px">Edit your 30 simulated profiles here. This remains available after Clear Everything.</p><div class="profile-manage-list">${phtml}</div>`;
 document.getElementById("managePanel").classList.remove("hidden");
}
function renderRepliesPanel(){
 const phtml=data.profiles.map(p=>`<div class="rule"><b>${esc(p.name)}</b>${p.autoReply.slice(0,25).map((r,i)=>`<div style="margin:8px 0;color:#aaa;font-size:13px">Keywords: ${esc(r.keywords.join(", "))}<br>Reply: ${esc(r.reply)} <button class="open-btn" data-edit-reply="${p.id}:${i}" style="margin-top:6px">Edit</button></div>`).join("")}</div>`).join("");
 document.getElementById("managePanel").innerHTML=`<h3>Automatic Replies</h3>
 <div class="rule reply-delay-settings">
   <b>Reply timing</b>
   <p style="color:#aaa;font-size:13px;margin:6px 0 12px">Replies arrive after a random delay within this range. Default: 30 seconds–5 minutes.</p>
   <form id="replyDelayForm" class="form">
     <div class="reply-delay-fields">
       <label>Minimum delay (minutes)<input name="minDelay" type="number" min="0.5" max="120" step="0.5" value="${Number(data.replyDelayMin)||0.5}" required></label>
       <label>Maximum delay (minutes)<input name="maxDelay" type="number" min="0.5" max="180" step="0.5" value="${Number(data.replyDelayMax)||5}" required></label>
     </div>
     <div class="form-actions"><button class="primary">Save Reply Timing</button></div>
   </form>
 </div>${phtml}`;
 document.getElementById("managePanel").classList.remove("hidden");
 document.getElementById("replyDelayForm").onsubmit=e=>{
   e.preventDefault();
   const f=new FormData(e.currentTarget);
   const min=Number(f.get("minDelay")),max=Number(f.get("maxDelay"));
   if(!Number.isFinite(min)||!Number.isFinite(max)||min<0.5||max<min||min>120||max>180){
     toast("Enter a valid range: minimum 0.5–120, maximum at least the minimum and no more than 180 minutes.");
     return;
   }
   data.replyDelayMin=min;data.replyDelayMax=max;save();
   toast(`Automatic replies will arrive in ${min*60} seconds to ${max} minutes`);
   renderRepliesPanel();
 };
}
function renderDataPanel(){
 document.getElementById("managePanel").innerHTML=`<h3>Local Data</h3><p style="color:#9295aa">Your profiles, chats and settings are saved in this browser. Backup files stay on your device and are not uploaded to GitHub.</p><div class="form-actions"><button class="primary" id="backupBtn">Download Backup</button><label class="primary" style="display:inline-flex;align-items:center;justify-content:center;cursor:pointer">Import Backup<input id="importInput" type="file" accept=".json" hidden></label><button class="danger" id="clearBtn">Clear Everything</button></div>`;
 document.getElementById("managePanel").classList.remove("hidden");
 document.getElementById("backupBtn").onclick=backup;
 document.getElementById("importInput").onchange=importBackup;
 document.getElementById("clearBtn").onclick=clearData;
}
function wirePhotoRemoveButtons(p){
 document.querySelectorAll("[data-remove-photo]").forEach(btn=>{
   btn.onclick=()=>{
     const [pid,idx]=btn.dataset.removePhoto.split(":");
     if(pid!==p.id)return;
     if(p.images.length<=1){toast("Keep at least one profile image");return}
     const removed=p.images[Number(idx)];
     p.images.splice(Number(idx),1);
     if(Array.isArray(p.photoNotes))p.photoNotes.splice(Number(idx),1);
     p.image=p.images[0];save();
     if(removed?.startsWith("idb:"))deleteImage(removed);
     const grid=document.getElementById("photoGrid");if(grid)grid.innerHTML=profileImagesHTML(p);
     wirePhotoRemoveButtons(p);
   };
 });
}
function openProfileTab(id){
  const p=profile(id);
  if(!p)return;
  const url=`profile.html?id=${encodeURIComponent(id)}`;
  const tab=window.open(url,"_blank","noopener,noreferrer");
  if(!tab)toast("Allow pop-ups to open the profile");
}
function openProfileDetails(id){
 const p=profile(id);
 if(!p)return;
 if(!Array.isArray(p.images))p.images=p.image?[p.image]:["images/alex.svg"];
 if(!Array.isArray(p.photoNotes))p.photoNotes=[];
 p.photoNotes=p.images.map((_,i)=>p.photoNotes[i]||"");
 const modal=document.getElementById("detailsModal");
 const box=document.getElementById("detailsContent");

 const render=()=>{
   const photos=p.images.map((img,i)=>`
     <figure class="detail-photo-view">
       <img src="${esc(imageSrc(img)||"images/alex.svg")}" alt="${esc(p.name)}">
       ${p.photoNotes[i]?`<figcaption>${esc(p.photoNotes[i])}</figcaption>`:""}
     </figure>`).join("");

   box.innerHTML=`
     <div class="details-hero">
       <img src="${esc(imageSrc(p.images[0])||"images/alex.svg")}" alt="${esc(p.name)}">
       <div><h2>${esc(p.name)}, ${p.age}</h2><span>${esc(p.location||"")}</span></div>
     </div>

     <div class="about-block">
       <h3>About</h3>
       <p>${esc(p.bio||"No bio added yet.")}</p>
     </div>

     <div class="detail-section">
       <h3>Lifestyle</h3>
       <p>${esc(p.lifestyle||"No lifestyle description added yet.")}</p>
     </div>

     <div class="detail-section">
       <h3>Interests</h3>
       <div class="detail-tags">${(p.tags||[]).map(x=>`<span>${esc(x)}</span>`).join("") || "<span>No interests added yet.</span>"}</div>
     </div>

     <div class="detail-section">
       <h3>Photos</h3>
       ${photos}
     </div>

     <div class="details-actions">
       <button type="button" class="small-btn" id="closeDetails">Close</button>
     </div>`;

   document.getElementById("closeDetails").onclick=()=>modal.classList.add("hidden");
 };

 modal.classList.remove("hidden");
 render();
}

function openPhotoViewer(id){
 const p=profile(id);
 if(!p)return;
 const imgs=p.images?.length?p.images:[p.image];
 let index=0;
 const modal=document.getElementById("photoViewerModal");
 const render=async()=>{
   const src=imgs[index];
   document.getElementById("viewerImage").src=imageSrc(src);
   if(src?.startsWith("idb:") && !imageCache[src])document.getElementById("viewerImage").src=await getImage(src)||"";
   document.getElementById("viewerCounter").textContent=`${index+1} / ${imgs.length}`;
   document.getElementById("viewerName").textContent=`${p.name}, ${p.age}`;
   document.getElementById("viewerPrev").style.visibility=imgs.length>1?"visible":"hidden";
   document.getElementById("viewerNext").style.visibility=imgs.length>1?"visible":"hidden";
 };
 modal.classList.remove("hidden");render();
 document.getElementById("viewerPrev").onclick=()=>{index=(index-1+imgs.length)%imgs.length;render()};
 document.getElementById("viewerNext").onclick=()=>{index=(index+1)%imgs.length;render()};
 document.getElementById("closeViewer").onclick=()=>modal.classList.add("hidden");
}
function openProfileEditor(id){
 const p=profile(id),modal=document.getElementById("profileModal");
 if(!Array.isArray(p.images))p.images=p.image?[p.image]:["images/alex.svg"];
 if(!p.images.length)p.images=["images/alex.svg"];

 document.getElementById("profileForm").innerHTML=`
   <label>Name<input name="name" value="${esc(p.name)}" required></label>
   <label>Age<input name="age" type="number" value="${p.age}" required></label>
   <label>Location<input name="location" value="${esc(p.location)}"></label>
   <label>Bio<textarea name="bio">${esc(p.bio)}</textarea></label>
   <label>Lifestyle<textarea name="lifestyle" placeholder="Example: Active, enjoys weekends outdoors, likes quiet evenings.">${esc(p.lifestyle||"")}</textarea></label>
   <label>Tags (comma separated)<input name="tags" value="${esc(p.tags.join(", "))}"></label>
   <label>Profile Images (up to 4)</label>
   <div class="photo-grid" id="photoGrid">${profileImagesHTML(p)}</div>
   <div class="image-notes-editor">
     ${p.images.map((img,i)=>`<label>Photo ${i+1} text / description<textarea data-editor-photo-note="${i}" placeholder="Describe what is shown in this image...">${esc(p.photoNotes?.[i]||"")}</textarea></label>`).join("")}
   </div>
   <div class="photo-add-row">
     <label class="primary photo-add">＋ Add Image
       <input id="addProfileImage" type="file" accept="image/*" multiple hidden>
     </label>
     <span class="photo-help">Select up to ${Math.max(0,4-p.images.length)} more image(s).</span>
   </div>
   <div class="form-actions">
     <button type="button" class="small-btn" id="cancelProfile">Cancel</button>
     <button class="primary" type="submit">Save Profile</button>
   </div>`;

 modal.classList.remove("hidden");

 const refreshPhotos=()=>{
   const grid=document.getElementById("photoGrid");
   if(grid)grid.innerHTML=profileImagesHTML(p);
   wirePhotoRemoveButtons(p);
   const help=document.querySelector(".photo-help");
   if(help)help.textContent=`Select up to ${Math.max(0,4-p.images.length)} more image(s).`;
   const notes=document.querySelector(".image-notes-editor");
   if(notes)notes.innerHTML=p.images.map((img,i)=>`<label>Photo ${i+1} text / description<textarea data-editor-photo-note="${i}" placeholder="Describe what is shown in this image...">${esc(p.photoNotes?.[i]||"")}</textarea></label>`).join("");
 };

 document.getElementById("cancelProfile").onclick=()=>modal.classList.add("hidden");

 document.getElementById("addProfileImage").onchange=async ev=>{
   const files=[...ev.target.files].filter(f=>f.type.startsWith("image/"));
   const available=4-p.images.length;
   if(available<=0){toast("Maximum of 4 images reached");ev.target.value="";return;}
   try{
     for(const file of files.slice(0,available)){
       const key=`idb:${p.id}:${Date.now()}:${Math.random().toString(36).slice(2)}`;
       await putImage(key,file);
       p.images.push(key);
       imageCache[key]=URL.createObjectURL(file);
     }
     p.image=p.images[0];
     save();
     refreshPhotos();
     renderAll();
     toast("Image added and saved");
   }catch(err){
     console.error(err);
     toast("Could not save image");
   }
   ev.target.value="";
 };

 wirePhotoRemoveButtons(p);

 document.getElementById("profileForm").onsubmit=e=>{
   e.preventDefault();
   const form=e.currentTarget;
   const f=new FormData(form);
   p.name=String(f.get("name")||"").trim();
   p.age=Number(f.get("age"))||0;
   p.location=String(f.get("location")||"").trim();
   p.bio=String(f.get("bio")||"");
   p.lifestyle=String(f.get("lifestyle")||"");
   p.tags=String(f.get("tags")||"").split(",").map(x=>x.trim()).filter(Boolean);
   p.photoNotes=p.images.map((_,i)=>form.querySelector(`[data-editor-photo-note="${i}"]`)?.value||"");
   p.imageText=p.photoNotes[0]||"";
   p.image=p.images[0];

   // Close the editor immediately after collecting the values, then refresh safely.
   modal.classList.add("hidden");
   try{
     save();
     renderAll();
     renderProfilesPanel();
     toast("Profile saved");
   }catch(err){
     console.error(err);
     toast("Profile updated in this session, but could not save browser storage");
   }
 };
}

function openReplyEditor(key){
 const [id,idx]=key.split(":"),r=profile(id).autoReply[Number(idx)];
 const panel=document.getElementById("managePanel");
 panel.innerHTML=`<h3>Edit Auto Reply</h3><form id="replyForm" class="form"><label>Trigger keywords<input name="keywords" value="${esc(r.keywords.join(", "))}"></label><label>Automatic reply<textarea name="reply">${esc(r.reply)}</textarea></label><div class="form-actions"><button type="button" class="small-btn" id="cancelReply">Cancel</button><button class="primary">Save</button></div></form>`;
 document.getElementById("cancelReply").onclick=renderRepliesPanel;
 document.getElementById("replyForm").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);r.keywords=f.get("keywords").split(",").map(x=>x.trim()).filter(Boolean);r.reply=f.get("reply");save();renderRepliesPanel();toast("Auto reply saved")};
}
async function blobToDataURL(blob){
 return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob)});
}
async function backup(){
 try{
   const out=JSON.parse(JSON.stringify(data));
   for(const p of out.profiles){
     const original=profile(p.id);
     p.images=[];
     for(const ref of original.images||[]){
       if(ref.startsWith("idb:")){
         const db=await openImageDB();
         const blob=await new Promise((resolve,reject)=>{
           const req=db.transaction("images","readonly").objectStore("images").get(ref);
           req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);
         });
         p.images.push(blob?await blobToDataURL(blob):"images/alex.svg");
       }else p.images.push(ref);
     }
     p.image=p.images[0];
   }
   const blob=new Blob([JSON.stringify(out)],{type:"application/json"});
   const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`BumbI_Backup_${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
   toast("Backup downloaded");
 }catch(e){console.error(e);toast("Backup failed")}
}
function mergeChatHistories(savedChats={}, currentChats={}){
 const merged={};
 const ids=new Set([...Object.keys(savedChats||{}),...Object.keys(currentChats||{})]);
 for(const id of ids){
   const saved=Array.isArray(savedChats?.[id])?savedChats[id]:[];
   const current=Array.isArray(currentChats?.[id])?currentChats[id]:[];
   const seen=new Set();
   // Keep backup messages first, then preserve newer messages already in this browser.
   merged[id]=[...saved,...current].filter(m=>{
     const key=m?.id!=null?`id:${m.id}`:`fallback:${m?.from||""}|${m?.time||m?.timestamp||""}|${m?.text||m?.message||""}`;
     if(seen.has(key))return false;seen.add(key);return true;
   }).sort((a,b)=>{
     const ta=Number(a?.timestamp||a?.timeStamp||0),tb=Number(b?.timestamp||b?.timeStamp||0);
     return ta&&tb?ta-tb:0;
   });
 }
 return merged;
}
function importBackup(ev){
 const file=ev.target.files[0];if(!file)return;
 const reader=new FileReader();
 reader.onload=async()=>{
   try{
     const x=JSON.parse(reader.result);
     if(!x||!Array.isArray(x.profiles)||!x.chats||typeof x.chats!=="object")throw new Error("This JSON does not look like a FAKEDATE backup.");
     // Validate and prepare everything before replacing app data, so a bad file cannot wipe current state.
     const restored=JSON.parse(JSON.stringify(x));
     const current=JSON.parse(JSON.stringify(data));
     restored.chats=mergeChatHistories(restored.chats,current.chats);
     // Preserve current profile conversations even when the imported backup omitted a profile.
     const restoredIds=new Set(restored.profiles.map(p=>p.id));
     current.profiles.forEach(p=>{if(!restoredIds.has(p.id)){restored.profiles.push(p);restoredIds.add(p.id)}});
     restored.matches=[...new Set([...(restored.matches||[]),...(current.matches||[])])];
     restored.notifications=[...(restored.notifications||[]),...(current.notifications||[])];
     data=restored;
     normalizeProfiles();
     await hydrateImages();
     save();
     renderAll();
     toast("Backup restored; chat history preserved");
   }catch(err){
     console.error("Backup import failed:",err);
     toast(err.message||"Could not import this backup file. Your current data was kept.");
   }finally{ev.target.value=""}
 };
 reader.onerror=()=>{toast("Could not read the selected backup file. Your current data was kept.");ev.target.value=""};
 reader.readAsText(file);
}
async function clearImageDB(){
 try{
   const db=await openImageDB();
   await new Promise((resolve,reject)=>{
     const tx=db.transaction("images","readwrite");
     tx.objectStore("images").clear();
     tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
   });
   Object.keys(imageCache).forEach(k=>{URL.revokeObjectURL(imageCache[k]);delete imageCache[k]});
 }catch{}
}
async function clearData(){
 if(!confirm("Clear all fake dating data from this browser? This cannot be undone unless you have a backup."))return;
 localStorage.removeItem(KEY);
 await clearImageDB();
 data=clone(defaultData);
 normalizeProfiles();
 save();
 renderAll();
 showView("manageView");
 renderProfilesPanel();
 toast("All data cleared");
}
function renderAll(){renderCard();renderMatches();renderChats();renderNotifications()}

document.querySelectorAll(".nav-item").forEach(b=>b.onclick=()=>showView(b.dataset.view));
document.getElementById("likeBtn").onclick=()=>next("like");
document.getElementById("passBtn").onclick=()=>next("pass");
document.getElementById("notifyBtn").onclick=()=>showView("notificationsView");
document.getElementById("clearNotifications").onclick=()=>{data.notifications=[];save();renderNotifications()};
document.getElementById("closeEditMessage").onclick=closeEditMessage;
document.getElementById("cancelEditMessage").onclick=closeEditMessage;
document.getElementById("editMessageForm").onsubmit=e=>{
 e.preventDefault();
 if(editMessageIndex===null)return;
 const value=document.getElementById("editMessageText").value.trim();
 if(!value)return;
 const messages=chatFor(activeChat);
 if(messages[editMessageIndex]?.from==="me"){
   messages[editMessageIndex].text=value;
   messages[editMessageIndex].edited=true;
   save();renderMessages();closeEditMessage();toast("Message edited");
 }
};
document.getElementById("closeChat").onclick=()=>document.getElementById("chatModal").classList.add("hidden");closeEditMessage();
document.getElementById("closeProfile").onclick=()=>document.getElementById("profileModal").classList.add("hidden");
document.getElementById("closeDetailsTop").onclick=()=>document.getElementById("detailsModal").classList.add("hidden");
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    document.getElementById("detailsModal").classList.add("hidden");
    document.getElementById("profileModal").classList.add("hidden");
    document.getElementById("chatModal").classList.add("hidden");
  }
});
const messageInputEl=document.getElementById("messageInput");
messageInputEl.addEventListener("input",()=>{messageInputEl.style.height="auto";messageInputEl.style.height=Math.min(messageInputEl.scrollHeight,140)+"px";});
document.getElementById("messageForm").onsubmit=e=>{e.preventDefault();sendMessage();messageInputEl.style.height="auto"};
document.getElementById("imageAttachment")?.addEventListener("change",e=>{const file=e.target.files?.[0];if(file)sendImage(file);e.target.value=""});
setupReactions();

document.querySelectorAll(".manage-card").forEach(b=>b.onclick=()=>{if(b.dataset.panel==="profiles")renderProfilesPanel();if(b.dataset.panel==="replies")renderRepliesPanel();if(b.dataset.panel==="data")renderDataPanel()});
document.addEventListener("click",e=>{
 const editChatMessage=e.target.closest("[data-edit-chat-message]");
 if(editChatMessage){
   const index=Number(editChatMessage.dataset.editChatMessage), msg=chatFor(activeChat)[index];
   if(!msg)return;
   const bubble=editChatMessage.closest(".bubble");
   if(bubble.querySelector(".inline-message-editor"))return;
   const original=msg.text||"";
   bubble.querySelector(".bubble-content").classList.add("hidden");
   editChatMessage.classList.add("hidden");
   const editor=document.createElement("div");editor.className="inline-message-editor";
   editor.innerHTML=`<textarea aria-label="Edit message text"></textarea><div class="inline-edit-actions"><button type="button" class="inline-cancel">Cancel</button><button type="button" class="inline-save">Save</button></div>`;
   const ta=editor.querySelector("textarea");ta.value=original;bubble.insertBefore(editor,bubble.querySelector("small"));
   ta.focus();ta.setSelectionRange(ta.value.length,ta.value.length);
   editor.querySelector(".inline-cancel").onclick=()=>renderMessages();
   editor.querySelector(".inline-save").onclick=()=>{const value=ta.value.trim();if(!value){ta.focus();return;}msg.text=value;msg.edited=true;save();renderMessages();renderChats();toast("Message updated");};
   ta.addEventListener("keydown",ev=>{if((ev.ctrlKey||ev.metaKey)&&ev.key==="Enter")editor.querySelector(".inline-save").click();if(ev.key==="Escape")renderMessages();});
   return;
 }
 const fix=e.target.closest("[data-fix-reply]");if(fix){const id=fix.dataset.fixReply;document.getElementById("chatModal").classList.add("hidden");showView("manageView");renderRepliesPanel();const panel=document.getElementById("managePanel");panel.scrollIntoView({behavior:"smooth",block:"start"});toast(`Edit ${profile(id)?.name||"profile"} replies and keywords below`);return}
 const c=e.target.closest("[data-chat]");if(c){openChat(c.dataset.chat);return}
 const ep=e.target.closest("[data-edit-profile]");if(ep){openProfileEditor(ep.dataset.editProfile);return}
 const er=e.target.closest("[data-edit-reply]");if(er){openReplyEditor(er.dataset.editReply);return}
 const vp=e.target.closest("[data-view-profile]");
 if(vp && !e.target.closest("button") && e.target.closest("img") && !vp.classList.contains("profile-card")){
   openProfileDetails(vp.dataset.viewProfile);
   return;
 }
});
renderAll();
