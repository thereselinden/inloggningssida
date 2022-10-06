# Inloggningsformulär: Inlämningsuppgift 2 - Medieinstitutet

## Beskrivning av uppgift

- Skapa ett dynamiskt inloggninsformulär med vanilla JavaScript
- Ska finnas en välkomstsida för ej inloggade personer
- Om felaktigt användarnamn / lösenord / försöka logga in utan uppgifter ska felmeddelande visas.
- Välkomstsida för inloggade användare
- En testperson skapad och sparad i localStorage
  - Testpersoner som är skapade:
    `användarnamn: fredrik, lösenord: 12345`
    `användarnamn: therese, lösenord: hejsan`
- Ska kunna logga ut inloggad användare

## Se sidan live

https://projectsignin.netlify.app/"

# Testflöde

## Användaren finns i localStorage

1. Öppna netlify länk ovan
2. Ange användarnamn och lösenord på någon av ovanstående testpersoner.

### Förväntat utfall

- användarens namn visas i header
- Logga ut knapp visas i mitten av sidan
- Icon i header byts ut

## Användarnamn eller lösenord är felaktigt - Förväntat utfall

- Felmeddelande om felaktiga uppgifter. Försvinner efter 3s.

## Klicka på logga in knappen och input fält är tomma - Förväntat utfall

- Felmeddelande om att värden inte kan vara tomma

## Skapa ny användare

1. Klicka på länken "skapa användare"
2. Ange användarnamn & lösenord

### Förväntat utfall

- Om användarnamnet inte redan är sparat i LocalStorage visas logga in formulär.
- Du kan nu logga in med den nya användaren.
- Om användarnamnet finns i LocalStorage - felmeddelande.
