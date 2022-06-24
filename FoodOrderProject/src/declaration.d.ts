declare module '*.jpg';
type Reducer<State, Action> = 
  (state: State, action: Action) => State;