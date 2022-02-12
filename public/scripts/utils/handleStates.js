export const DESCRIPTION_COMPONENT = document.querySelector('#simulation-helper');

export const CAPITAL_COMPONENT = document.getElementById('simulator-capital');
export const RISK_COMPONENT = document.getElementById('simulator-risk');
export const RETURNS_COMPONENT = document.getElementById('simulator-returns');


export const handleStatesSimulator = {
  default_state: [
    {access: DESCRIPTION_COMPONENT, type: 'text', content: 'Bienvenido al simulador'},
    {access: CAPITAL_COMPONENT, type: 'style', content: 'opacity: 0;'},
  ],
  state_1 : [
    {access: DESCRIPTION_COMPONENT, type: 'text', content: 'Ingresa el dinero que estás dispuesto a invertir en tecnología'},
    {access: CAPITAL_COMPONENT, type: 'style', content: 'opacity: 1;'},
    {access: RISK_COMPONENT, type: 'style', content: 'opacity: 0;'}
  ],
  state_2 : [
    {access: DESCRIPTION_COMPONENT, type: 'text', content: 'Aquí selecciona el riesgo que quieres tomar con tu inversión'},
    {access: RISK_COMPONENT, type: 'style', content: 'opacity: 1;'},
    {access: RETURNS_COMPONENT, type: 'style', content: 'opacity: 0;'}
  ],
  state_3 : [
    {access: DESCRIPTION_COMPONENT, type: 'text', content: 'Este sería el capital que tendrías en 12 meses! 🥳'},
    {access: RETURNS_COMPONENT, type: 'style', content: 'opacity: 1;'},
  ]
}