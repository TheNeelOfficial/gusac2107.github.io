---------------------------------------------------
DOCUMENTATION FOR USING SASS FILE 
Author: Nikhil Srivatsa
---------------------------------------------------

1. Folder Structure 
2. Usage
   - Helper Classes
   - Adding Animations
   - Responsive Design



Folder Structure
_________________

sass/ 

|– base/ 
   |– _reset.scss       # Reset/normalize 
   |– _sk-helpers.scss  # Sukor Helper Functions 
   |– _animations.scss  # Animation Helper Classes 
   |– _components.scss  # Helper Classes for components 
 
|– components/ 
   |– _buttons.scss    
   |– _carousel.scss    
   |– _cover.scss       
   |– _dropdown.scss    
   |– _navigation.scss  
   |-- _alerts.scss
   |-- _buttons.scss
   |-- _checkboxes.scss
   |-- _choices.scss
   |-- _countdowns.scss
   |-- _icons.scss
   |-- _loaders.scss
   |-- _messages.scss
   |-- _modifiers.scss
   |-- _panes.scss
   |-- _ratings.scss
   |-- _results.scss
   |-- _selectboxes.scss
   |-- _tableviews.scss
   |-- _textboxes.scss
   |-- _throbbers.scss
   |-- _currency.scss


|– mixins/ 
   |– _alignment.scss    
   |– _animations.scss  
   |– _borders.scss      
   |– _helpers.scss    
   |– _responsive-web.scss  
   |– _typography.scss  
   |– _visuals.scss  
 

|– project/ 
   |– _master.scss        # Master Style Sheet 
   |– _header.scss        # header specific styles 
   |– _footer.scss        # footer specific styles 
   |– _forms.scss         # forms specific styles
   |– _config.scss        # Config for project  



– imports.scss          # Contains All Imports 




Usage
_________________


1. Helper Classes
    
   Fonts 
      .font12, .font13, .font14 , .font16, .font18, .font20, .font22, .font24 
      ***Comments: Automatically has fallback to rems 

   Colors & Backgrounds 
      .medgrey(#555), .lightgrey(#777), .silvergrey(#9c9c9c) , .white
      .bg-white, bg-grey(#eee)

   Margins & Padding
      no-sidepad, no-sidemargin, add-sidepad, add-sidemargin, add-sidepad-left, add-sidepad-right
      ***Comments: All rows in bootstrap come with a -15px sidemargins. They can be removed using no-sidemargin

   Spacing 
      Syntax: go-{{direction}}-{{size}}
      Available Directions: bottom, top, left, right 
      Available Sizes: xs, sm ,md, lg
      Examples: go-bottom-xs, go-bottom-lg, go-left-md, go-left-sm

   Misc
      .pointer(cursor=pointer)

2. Adding Animations
   ***Comments: Add the following classes to get the desired animation 
              : Refer to playground.sukor.in for more details
              : The most common animations have been covered here. For more information refer to the website mentioned above

   .slide{{Direction}} Available: .slideDown, .slideUp, .slideLeft, .slideRight
   .fadeIn
   .expandUp, .slideExpandUp, .expandOpen, .stretchLeft, .stretchRight

3. Responsive Design 
   ***Comments: Include the following mixins within the classes to override

   @include device('{{devicetype}}')
   Available Device Types: mobile, phablet, tablet, laptop, desktop
   Example Usage: 

      .custom-container {
        background: red;
        @include device('mobile') {
          background:blue;
        }
        @include device('phablet') {
          background:yellow;
        }
        @include device('tablet') {
          background:red;
        }
        @include device('laptop') {
          background:green;
        }
        @include device('desktop') {
          background:orange;
        }
      }


      








