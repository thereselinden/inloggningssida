# Inloggningsformulär

## Inlämningsuppgift 2 - Medieinstitutet

## Beskrivning av uppgift

- Skapa ett dynamiskt inloggninsformulär med vanilla JavaScript
- Ska finnas en välkomstsida för ej inloggade personer
- Om felaktigt användarnamn / lösenord / försöka logga in utan uppgifter ska felmeddelande visas.
- Välkomstsida för inloggade användare
- En testperson skapad och sparad i localStorage
  - Testpersoner som är skapade:
    användarnamn: fredrik, lösenord: 12345
    användarnamn: therese, lösenord: 12345
- Ska kunna logga ut inloggad användare

## Se sidan live

"www.githubpages.com"

# Testflöde

## Användaren finns i localStorage

1. Öppna github pages via länken ovan
2. Ange användarnamn och lösenord på någon av ovanstående testpersoner.

### Förväntat utfall

- användarens namn visas i header
- Logga ut knapp visas i mitten av sidan
- Icon i header byts ut

## Användarnamn eller lösenord är felaktigt

1. Ange felaktigt användarnamn och/eller lösenord

### Förväntat utfall

- Felmeddelande om att användaren inte finns

## Klicka på logga in knappen och input fält är tomma

### Förväntat utfall

- Felmeddelande om att värden inte kan vara tomma
