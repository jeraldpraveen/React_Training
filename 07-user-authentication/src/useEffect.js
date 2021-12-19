// That is correct, but there are a few exceptions you should be aware of:

// 1 ----> You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid):
// React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

// 2 ----> You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc
//  (functions and features built-into the browser and hence available globally):
// These browser APIs / global functions are not related to the React component render cycle and they also never change

// 3 ----> You also DON'T need to add variables or functions you might've defined OUTSIDE of your components
// (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside
// of a component function and hence changing them won't affect your components
// (components won't be re-evaluated if such variables or functions change and vice-versa)

// So long story short: You must add all "things" you use in your effect function if those "things" could change
// because your component (or some parent component) re-rendered. That's why variables or state defined in component functions,
// props or functions defined in component functions have to be added as dependencies!
