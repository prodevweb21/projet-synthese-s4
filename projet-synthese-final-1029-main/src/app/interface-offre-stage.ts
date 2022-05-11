// Fait par Émilie Stratford
// Interface pour les offres de stages
// ************************************************* //

export interface InterfaceOffreStage {
    _id: String
    title: String
    description: String
    enterprise: String
    startDate: Date
    endDate: Date
    program: String
    region: String
    activitySector: String
    requirements: String
    stageType: String
    hoursPerWeek: Number
    additionalInfo: String
    paid: [String]
    skills: [String]
    published: boolean
}


