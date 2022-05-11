// Creer par : Thomas Patenaude Poulin
// Ceci est l'interface propre aux entreprises.

export interface Entreprise {
_id: String,
name: String,
description: String,
imageUrl: String,
contactName: String,
contactEmail: String,
contactPhone:String,
address: String,
city: String,
province: String,
postalCode: String,
published: Boolean,
__v: 0
  }
