import { ofType } from "redux-observable";
import {
  sendRequestToReceiveServices,
  sendRequestToReceiveDetails,
  exposeError,
  receiptServicesSuccess,
  receiptDetailsSuccess,
} from "../slices/servicesSlice";
import { of } from "rxjs";
import {
  map,
  tap,
  retry,
  switchMap,
  mergeMap,
  catchError,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export const getServicesListEpic = (action$) =>
  action$.pipe(
    ofType(sendRequestToReceiveServices.type),
    switchMap(() =>
      ajax.getJSON(`${process.env.REACT_APP_API_URL}/api/services`).pipe(
        // retry(3),
        map((o) => receiptServicesSuccess(o)),
        catchError((e) => of(exposeError(e)))
      )
    )
  );

export const getServiceDetailsEpic = (action$) =>
  action$.pipe(
    ofType(sendRequestToReceiveDetails.type)
    // map((o) => o.payload),
    // map((o) => new URLSearchParams({ q: o })),
    // tap((o) => console.log(o)),
    // switchMap((o) =>
    //   ajax.getJSON(`${process.env.REACT_APP_API_URL}/api/services`).pipe(
    //     retry(3),
    //     map((o) => receiptDetailsSuccess(o)),
    //     catchError((e) => of(exposeError(e)))
    //   )
    // )
  );
