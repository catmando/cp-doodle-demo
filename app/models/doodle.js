/*

design = background + personalization

background/:bg_id/personalize/:personalization

ember constructs personalization model (which is really just a encoded hash)

   JSON.parse(decodeURIComponent(encodeURIComponent(JSON.stringify(personalization_object)))) -> id
   encodeURIComponent(JSON.stringify(personalization_id)) -> object
   
same path followed by things like .png, etc give you back yer foobar



*/