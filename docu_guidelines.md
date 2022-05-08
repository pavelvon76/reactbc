# Guidelines pro psaní dokumentace

## Jak zadávat základní informace

Help, jak si rychle ukázat, co jaká značka v MD dělá je  [Tady](https://markdown-it.github.io/)

- blok textu max. 5-6 řádků, více ne
používat odrážky. Jinak se v tom nikdo nevyzná.
- Názvy polí a objektů (stránek, reportů) a funkcí tučně. Př.: Zadejte **Počet stránek** k tisku na záložce **Obecné** v reportu **Potvrzení prodejí objednávky**.
- používat notes
- 2 úrovně: nadpis celé stránky (vlevo ve stromu), nižší úroveň v pravém stromu navigace na stránce 
- nadpisy nižších úrovní ne moc dlouhé (jsou pak těžko čitelné v pravém navigačním stromu)
- v případě, že chcete, aby uživatel vyhledal page/akci/report (atd.), používetje slovní spojení ve stylu: Vyberte ikonu :mag_right:, zadejte **...** a poté vyberte související odkaz.
- pro termín "fasttab" budeme jako český překlad používat slovo "záložka"
- v textu nepoužívat interní zkartky modulů (např. ef-base), ale jejich název (např. Financials Base, popř. Essence Financials Base)

:warning: **NEPOUŽÍVEJTE Italic** font, je v tom textu přehlédnutelný a nečitelný. Raději používejte **BOLD**, maximálně ***BOLD ITALIC***

## Postup v krocích
Pokud dojde na postup v krocích, tak postupujte takto:
1. Začátky číslovaného odskoku číslujte klidně jen pomocí 1. znaku
1. Pokud dojde na podúroveň, tedy jako, třeba, že v tomto kroku proveďte ještě
    - krok A
    - pak krok B

    Jednoduše zanořte minusy do nižší úrovně
1. V klidu pak zase pokračujte dalším krokem.
1. That's IT! 

## Další vychytávky
### Zobrazení dat v tabulce

| Pole | Popis |
| ---- | ----- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

### Zarovnání čísel v tabulce doprava

| Parametr | Hodnota |
| -------- | -------:|
| odhad   | 153,34 |
| realizace | 3487,65|
| test| 157,77 |

### Zarovnání čísel v tabulce Doprostřed

| Parametr | Hodnota |
|:--------:|:-------:|
| odhad   | 153,34 |
| realizace | 3487,65|
| test| 157,77 |

### Odkazy na další zdroje

[link text](http://dev.nodeca.com)

### Obrázky 
Obrázky ksou spefické tím, že je máte všechny v jedné složce s názvem **Media**

![Text pro zobrazení v případě problémů s obr.](/media/essencelogo.png "Obrázek ukazuje Logo společnosti Essence")


### warning a poznámky
:warning: It works with almost all markdown flavours (the below blank line matters).

Alternativy oproti :warning: warningu:
- :heavy_check_mark: když se něco fakt daří
- :x: když někdo něco fakt nemá dělat 

### kdo by musel čáru, tak ...
---

## Best practice
- pokud něco nejde vidět a je na konci řídící znak, přidej mezeru
- přidel prázdnou řádku Enterem za odstavci, na webu to vypadá líp
- pokud má tabulka 1 řádek, nepřidávej nakonec ---
- ta mezera je fakt super nápad, i ten novej řádek
- snažte se ctít typografická pravidla
- ten náhled vpravo od toho, co píšete není vždycky to, jak to vypadá na webu. Používej často **docfx build --serve** v terminálovém okně, aby jsi se naučil si to zobrazovat na webové stránce.

## Procesní dokumentace
- poskytuje rozšířenou nápovědu, popisuje širší souvislosti, pracovní postup, následující kroky, možné alternativy atd.
- přistupuje se k ní buď pomocí odkazu Naučit se více na tooltipu k akci, pomocí klávesové zkratky Alt + F1 nebo pomocí symbolu :mag_right: a volby Nápověda a podpora v pravém horním rohu okna.

### Jak psát dokumentaci
- pracovní postup popisovat nejlépe číslovanými kroky, každý krok začíná velkým písmenem a na konci každého je tečka
- při popisu začínat větou Vyberte ikonu :mag_right:, zadejte xxxx (například Zákazníci) (zde neuvádět další rozšiřující slova jako volba, funkce, možnost atd.)
- na stránce xxxx (například Zákazníci) vyberte akci xxxx (například Nový)
- ve stejném duchu pokračovat rozkazovacím způsobem ve 2. osobě množného čísla i dále (Vyberte, Vyplňte, Zvolte, Označte, Upravte atd.)
- pro potvrzovací zprávu ANO/NE (typická zpráva – opravdu chcete změnit kurz…?) používat označení tlačítka (tedy tlačítko Ano, tlačítko Ne). V dialogovém okně xxxx vyberte tlačítko Ano…
-  	vzniklou událost popisovat nejčastěji v trpném rodě a přítomném čase
    - karta je vytvořena,
    - zákazník je zaregistrován,
    - doklad je zaúčtován,
    - šablona je přidána atd.
- záložkami nazývat klasické záložky, jak jsme zvyklí (Obecné, Dodávky, Fakturace atd) a také záložky na sestavách (Možnosti). Záložka se dá rozbalit. (Rozbalte záložku)
- reporty nazývat sestavy, případně dávkové úlohy (například Úprava směnných kurzů)

Zaškrtávací pole – pro tento typ polí používat zaškrtněte pole nebo spojení vyberte zaškrtávací tlačítko.
Pole zaškrtávací na seznamu – opět používat zaškrtněte pole.
Pole typu Option – vybíráme z možností nebo číselníku, tedy používat slovo vyberte (bez dalšího rozšíření jako možnost, volbu atd).
Pole doplňovací – zde používat spíše slovo zadejte nebo vyplňte (jedná se nejčastěji o pole, kde se hodnota ručně vypisuje, tedy různá data, popis atd.).

Poznámka:
Možná by se někomu mohlo hodit spojení Vyplňte pole podle potřeby. Chcete-li si přečíst krátký popis, umístěte ukazatel myši na pole. (především ve významu podívat se na tooltip)

### Příklad procesní dokumentace Microsoft
1.	Vyberte ikonu :mag_right:, zadejte **Zákazníci**, a poté vyberte související odkaz.
1.	Na stránce **Zákazníci** vyberte akci **Nový**.
1.	Pokud existuje pouze jedna šablona zákazníka, otevře se nová karta zboží s několika poli s předvyplněnými informacemi ze šablony.
1.	Pokud existuje více než jedna šablona zákazníka, otevře se stránka, ze které můžete vybrat požadovanou šablonu zákazníka. V takovém případě postupujte podle následujících dvou kroků.
1.	Na stránce **Vybrat šablonu pro nového zákazníka** vyberte šablonu, kterou chcete použít pro novou kartu zákazníka.
1.	Zvolte tlačítko **OK**. Otevře se nová karta zákazníka s některými předvyplněnými poli podle informací ze šablony.
1.	Postupujte podle potřeby tak, že vyplníte nebo změníte pole na kartě zákazníka. Chcete-li si přečíst krátký popis, umístěte ukazatel myši na pole.

### Práce s nově staženou šablonou
1.  Výraz "modulename" nahradit názvem modulu (např. "financials-base"), a to jak u souborů, tak v toc.yml souborech. Nepoužívejte "ef-base" nebo "essence-financials-base" - slovo "essence" bude obsaženo v rámci domény, na které bude dokumentace nahrána. 