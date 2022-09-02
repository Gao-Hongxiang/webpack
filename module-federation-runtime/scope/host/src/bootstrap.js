import isArray from 'check-is-array';
import("remote/RemoteComponent").then(result => {
    console.log(result.default, isArray);
});