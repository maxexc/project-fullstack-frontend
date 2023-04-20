export const theme = {
  device: {
    mobail: 'screen and (min-width: 375px)',
    tablet: 'screen and (min-width: 768px)',
    desktop: 'screen and (min-width: 1304px)',
  },

  // ${props => props.theme.color.footer.bavkgroundFooter}

  dark: {
    color: {
      primary: '#22252A',
      secondary: '#8BAA36',

      // background
      backgrounGlobal: '#1E1F28',

      header: {
        headerDark: '#22252A',
        headerContainer: '#1E1F28',
        backgroun: '#1E1F28',
        textNavigation: '#FAFAFA',
        burgerBtn: '#FAFAFA',
        modalBackground: '#2A2C36',
        modalText: '#FAFAFA',
        modaBorder: ' #8baa36',

        pageRecipe: '#23262A',
        pageRecipeScroll: '#fff',
      },

      mainPage: {
        mpHeroTitle: '#FAFAFA',
        mpHeroText: '#FAFAFA',
        mpHeroProductColor: '#FAFAFA',
        mpHeroProductBackground: '#2A2C36',
        recipeCategoryName: '#FAFAFA',
        mpButton: '#FAFAFA',
        searchBtn: '#8BAA36',
        searchBtnFocus: '#fafafa',
        searchInputBorder: 'rgba(250, 250, 250, 0.5)',
        searchInputHover: 'rgba(250, 250, 250)',
        searchInputBG: '#1E1F28',
        searchInputColor: '#FAFAFA',
        searchInputPlaceholder: 'rgba(250, 250, 250, 0.5)',
        searchBtncolorFocus: '#22252A',
        searchBtnFocusSearch: '#ECECEC',
      },
      dishCard: { dishTitleWrapper: '#2A2C36', dishTitle: '#FAFAFA' },
      searchPage: {
        searchTypeSpan: '#FAFAFA',
        customSelectBG: 'transparent',
        customSelectColor: '#FAFAFA',
        reactSelectMenuList: '#8BAA36',
        reactSelectOptionColor: 'rgba(250, 250, 250, 0.5)',
        reactSelectOptionHover: 'rgba(250, 250, 250)',
        SRLNoItemsText: '#FAFAFA',
        //-------------
        // reactSelectContainer: '#ececec',
        // reactSelectDropdown: '#8baa36',

        // reactSelectOptionColorBG: 'transparent',
      },
      mainPageTitle: {
        colorTitle: '#FAFAFA',
      },

      favorit: {
        cardWrapper: '#2A2C36',
        cardTitle: '#FAFAFA',
        cardDescription: 'rgba(250, 250, 250, 0.6)',
        cardTime: '#FAFAFA',
        cardButtonSee: '#8BAA36',
        cardButtonSeeBorder: '#8BAA36',
        cardButtonSeeHover: '#22252A',
        cardButtonDelete: '#1E1F28',
        cardButtonDeleteHoverBackground: '#EBF3D4',
        cardButtonDeleteBorder: '#1E1F28',
        cardIconStroke: '#fafafa',
        cardIconStrokeHover: '#22252a',
        cardIconFill: '#1E1F28',
        cardIconFillHover: '#EBF3D4',
        pagination: '#ebf3d4',
        paginationHover: '#8BAA36',
      },

      shoppingList: {
        colorImageContainer: '#2A2C36',
        borderItemContainer: 'rgba(250, 250, 250, 0.3)',
        titleProduct: '#FAFAFA',
        strokeRemoveSvg: '#FAFAFA',
        ImgIngradientsText: ' #FAFAFA',
      },

      footer: {
        bavkgroundFooter: '#8BAA36',
        buttonBgDisable: '#869b4e',
        buttonBg: '#1E1F28',

        hoverLink: '#1E1F28',
        hoverButtonText: '#8BAA36',
        hoverBoxShadow: '10px 10px 43px -14px rgba(34,37,42,0.75)',

        iconFill: '#ffffff',
        hoverIconFill: '#1E1F28',

        textBottom: '#FAFAFA',
      },

      addResipe: {
        inputColor: '#FAFAFA',
        optionMenuColor: '#8BAA36',
        optionSelectHover: '#FFFFFF',
        titleColor: '#FAFAFA',
        ingridientsCounter: '#FFFFFF',
        simbolColor: '#FFFFFF',
        ingridientsBackground: 'transparent',
        ingredientsBorder: 'rgba(250, 250, 250, 0.2)',
        ingridientsOpasity: '1',
        ingridientsInputColor: '#D9D9D9',
        ingredientsSelested: 'rgba(217, 217, 217, 0.6)',
        addButton: '#8BAA36',
      },

      recipePage: {
        backgrounRecipeItem: '#2A2C36',
        ingName: '#FAFAFA',
        instructionTitle: '#FAFAFA',
        instructionText: '#FAFAFA',
        instructionScrollbarThumb: '#EBF3D4',
      },
    },
  },

  white: {
    color: {
      primary: '#8BAA36',
      secondary: '#22252A',

      // background
      backgrounGlobal: '#FFFFFF',

      header: {
        headerContainer: 'rgb(255, 255, 255)',
        backgroun: '#FAFAFA',
        textNavigation: '#23262A',
        burgerBtn: '#22252A',
        modalBackground: '#fafafa',
        modalText: '#23262A',
        modaBorder: ' #FAFAFA',

        pageRecipe: '#23262A',
        pageRecipeScroll: '#23262A',
      },

      mainPage: {
        mpHeroTitle: '#22252a',
        mpHeroText: '#23262a',
        mpHeroProductColor: '#3E4462',
        mpHeroProductBackground: '#ffffff',
        recipeCategoryName: '#001833',
        mpButton: '#22252a',
        searchBtn: '#22252A',
        searchBtnFocus: '#8BAA36',
        searchInputBorder: '#F0F0F0',
        searchInputHover: '#dfdfdf',
        searchInputBG: '#fafafa',
        searchInputColor: '#23262A',
        searchInputPlaceholder: '#BDBDBD',
        searchBtncolorFocus: '#fafafa',
        searchBtnFocusSearch: '#22252A',
      },
      dishCard: { dishTitleWrapper: '#ffffff', dishTitle: '#3e4462' },
      searchPage: {
        searchTypeSpan: '#001833',
        customSelectBG: '#ececec', //#D9D9D9
        customSelectColor: '#000000',
        reactSelectMenuList: '#FAFAFA',
        reactSelectOptionColor: 'rgba(0, 0, 0, 0.5)',
        reactSelectOptionHover: '#000000',
        //-------------
        SRLNoItemsText: '#000000',
        // reactSelectContainer: '#ececec',
        // reactSelectDropdown: '#8baa36',
        // reactSelectOptionColorBG: 'transparent',
      },

      mainPageTitle: {
        colorTitle: '#001833',
      },

      favorit: {
        cardWrapper: '#FFFFFF',
        cardTitle: '#3e4462',
        cardDescription: '#23262A',
        cardTime: '#3e4462',
        cardButtonSee: '#22252A',
        cardButtonSeeBorder: 'rgb(250, 250, 250)',
        cardButtonSeeHover: '#8BAA36',
        cardButtonDelete: '#ebf3d4',
        cardButtonDeleteHoverBackground: '#1e1f28',
        cardButtonDeleteBorder: '#EBF3D4',
        cardIconStroke: '#22252a',
        cardIconStrokeHover: '#fafafa',
        cardIconFill: '#ebf3d4',
        cardIconFillHover: '#22252a',
        pagination: '#8BAA36',
        paginationHover: '#ebf3d4',
      },

      shoppingList: {
        colorImageContainer: '#EBF3D4',
        borderItemContainer: '#e0e0e0',
        titleProduct: '#3e4462',
        strokeRemoveSvg: '#333333',
      },
      footer: {
        bavkgroundFooter: '#22252A',
        buttonBgDisable: '#869b4e',
        buttonBg: '#8baa36',

        hoverLink: '#8BAA36',
        hoverButtonText: '#22252A',
        hoverBoxShadow: '10px 10px 43px -14px rgba(139,170,54,0.75)',

        iconFill: '#8baa36',
        hoverIconFill: '#ffffff',

        textBottom: '#22252A',
      },
      addResipe: {
        inputColor: '#000000',
        optionMenuColor: 'transperent',
        optionSelectHover: '#8baa36',
        titleColor: '#3E4462',
        ingridientsCounter: 'rgba(51, 51, 51)',
        simbolColor: 'rgba(51, 51, 51, 0.3)',
        ingridientsBackground: '#f5f5f5',
        ingredientsBorder: '#f5f5f5',
        ingridientsOpasity: '0,5',
        ingridientsInputColor: '#000000',
        ingredientsSelested: 'rgba(0, 0, 0, 0.5)',
        addButton: '#22252A',
      },

      recipePage: {
        backgrounRecipeItem: '#ebf3d4',
        ingName: '#3E4462',
        instructionTitle: '#3E4462',
        instructionText: '#3E4462',
        instructionScrollbarThumb: '#22252a',
      },
    },
  },
};

export default theme;
