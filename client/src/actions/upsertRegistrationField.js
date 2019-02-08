export const UPSERT_REGISTRATION_FIELD = 'SET_RUSSIAN_LANG';

export default (fieldName, fieldValue) => ({
  type: UPSERT_REGISTRATION_FIELD,
  fieldName,
  fieldValue,
});
